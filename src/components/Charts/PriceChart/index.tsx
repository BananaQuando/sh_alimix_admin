import React from 'react';
import { observer, inject } from 'mobx-react';
import { Line } from 'react-chartjs-2';
import { observable, action } from 'mobx';
import { ITimeDependsDataDates } from '../../../stores/ProductStore/interfaces';
import { IOptionStore } from '../../../stores/OptionsStore/interfaces';

interface Props {
	datesData: ITimeDependsDataDates,
	optionStore?: IOptionStore
}

interface State {
	data: {
		labels: string[],
		datasets: any[]
	}
}


@observer
@inject('optionStore')
export default class PriceChart extends React.Component <Props, State> {

	constructor(props: any){
		super(props);

		this.state = {
			data: {
				labels: [],
				datasets: []
			}
		};
	}

	@observable formatDatesData = async (dates: ITimeDependsDataDates) => {

		let data = {
			labels: [] as string[],
			datasets: [] as any[],
		};

		for (const date in dates) {

			if (dates.hasOwnProperty(date)) {

				const dateData = dates[date];

				if (data.labels.indexOf(date) === -1) data.labels.push(date);
				for (const key in dateData.regular) {

					if (dateData.regular.hasOwnProperty(key)) {
						const price = dateData.regular[key];
						
						const keyName = `regular_${key}`;
						const optionIndex = this.findOptionInArray(keyName, data.datasets);
						
						if (optionIndex !== null) {
							data.datasets[optionIndex].data.push(price);
						}else{
							const lineRegular = this.createLineData(keyName, 'rgba(0, 123, 255, 1)');
							lineRegular.data.push(price);
							data.datasets.push(lineRegular);
						}
					}
				}

				for (const key in dateData.special) {
					if (dateData.special.hasOwnProperty(key)) {
						const price = dateData.special[key];
						
						const keyName = `special_${key}`;
						const optionIndex = this.findOptionInArray(keyName, data.datasets);
						if (optionIndex !== null) {
							data.datasets[optionIndex].data.push(price);
						}else{
							const lineSpecial = this.createLineData(keyName, 'rgba(227, 95, 108, 1)');
							lineSpecial.data.push(price);
							data.datasets.push(lineSpecial);
						}
					}
				}
			}
		}

		data = await this.formatLabels(data);

		return data;
	}

	@observable @action async formatLabels(_data: any){

		_data.labels.forEach((date: string, index: number) => {
			const dateFull = new Date(Number(date));
			_data.labels[index] = `${dateFull.getUTCDate()}-${dateFull.getUTCMonth()}-${dateFull.getFullYear()}`;
		});

		
		for (let index = 0; index < _data.datasets.length; index++) {

			const currentLabel = _data.datasets[index].label;

			const label = currentLabel.replace(/((regular_)+)?((special_)+)?/, '');

			const newLabel = await this.renameOptionLabel(label);
			
			const postfix = currentLabel.match(/regular/) ? 'Regular' : 'Special';

			_data.datasets[index].label = `${newLabel} (${postfix})`;
		}

		return _data;
	}



	@observable async renameOptionLabel(label: string) {

		const optionValues = label.split('-');

		let newLabel = '';
		for (let index = 0; index < optionValues.length; index++) {

			const value = await this.props.optionStore!.getOptionValue(Number(optionValues[index]));
			if (index !== 0) newLabel += '-';
			newLabel += value.name;
		}

		return newLabel;
	} 

	createLineData(_title: string, _color: string){

		return {
			label: _title,
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: _color,
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: _color,
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: _color,
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [] as number[]
		}
	}

	findOptionInArray(_option:string, _array: any[]){
		
		let result = null;

		for (let i = 0; i < _array.length; i++){
			const el = _array[i]
			if (el.label === _option) {
				result = i;
				break;
			}
		}

		return result;
	}

	async componentDidMount() {

		this.setState({
			data: await this.formatDatesData(this.props.datesData)
		})
	}

	render() {

		return (
			<>
				{ this.state.data.labels.length ?  <Line data={this.state.data} /> : '' }
			</>
		);
	}

}