import React from 'react';
import { observer, inject } from 'mobx-react';
import { Line } from 'react-chartjs-2';
import { observable, action } from 'mobx';
import { ITimeDependsDataDates } from '../../stores/ProductStore/interfaces';
import { IOptionStore } from '../../stores/OptionsStore/interfaces';

interface Props {
	datesData: ITimeDependsDataDates,
	optionStore?: IOptionStore,
	chartsData: IChartData[]
}

interface IChartData {
	chartField: string,
	chartColor: string
}

interface State {
	data: {
		labels: string[],
		datasets: any[]
	}
}


@inject('optionStore')
@observer
export default class DefaultChart extends React.Component <Props, State> {

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
				
				const { chartsData } = this.props;

				for (let i = 0; i < chartsData.length; i++){
					const chartData: IChartData = chartsData[i];
					const { chartColor, chartField } = chartData;

					for (const key in dateData[chartField]) {
						
						if (dateData[chartField].hasOwnProperty(key)) {
							const price = dateData[chartField][key];
							
							const keyName = `${chartField}_${key}`;
							const optionIndex = this.findOptionInArray(keyName, data.datasets);
							
							if (optionIndex !== null) {
								data.datasets[optionIndex].data.push(price);
							}else{
								const line = this.createLineData(keyName, chartColor);
								line.data.push(price);
								data.datasets.push(line);
							}
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

			const label = currentLabel.replace(/((regular_)+)?((special_)+)?((quantity_)+)?/, '');

			const newLabel = await this.renameOptionLabel(label);
			
			const postfix = currentLabel.match(/regular/) ? ' (Regular)' : currentLabel.match(/special/) ? ' (Special)' : '';

			_data.datasets[index].label = `${newLabel}${postfix}`;
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
				{ <Line data={this.state.data} /> }
			</>
		);
	}

}