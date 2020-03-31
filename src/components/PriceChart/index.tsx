import React from 'react';
import { observer, inject } from 'mobx-react';
import { Line } from 'react-chartjs-2';
import { observable, action } from 'mobx';
import { ITimeDependsDataDates } from '../../stores/ProductStore/interfaces';
import { IOptionStore } from '../../stores/OptionsStore/interfaces';

interface Props {
	datesData: ITimeDependsDataDates,
	optionStore?: IOptionStore
}


@observer
@inject('optionStore')
export default class PriceChart extends React.Component <Props> {

	@observable data = {
		labels: [] as string[],
		datasets: [] as any[],
	};

	@observable complete = false;

	@observable @action formatDatesData = async (dates: ITimeDependsDataDates) => {

		for (const date in dates) {

			if (dates.hasOwnProperty(date)) {

				const dateData = dates[date];

				if (this.data.labels.indexOf(date) === -1) this.data.labels.push(date);
				for (const key in dateData.regular) {

					if (dateData.regular.hasOwnProperty(key)) {
						const price = dateData.regular[key];
						
						const keyName = `regular_${key}`;
						const optionIndex = this.findOptionInArray(keyName, this.data.datasets);
						
						if (optionIndex) {
							this.data.datasets[optionIndex].data.push(price);
						}else{
							const lineRegular = this.createLineData(keyName, 'rgba(0,0,255,1)');
							lineRegular.data.push(price);
							this.data.datasets.push(lineRegular);
						}
					}

					if (dateData.special.hasOwnProperty(key)) {
						const price = dateData.special[key];
						
						const keyName = `special_${key}`;
						const optionIndex = this.findOptionInArray(keyName, this.data.datasets);
						
						if (optionIndex) {
							this.data.datasets[optionIndex].data.push(price);
						}else{
							const lineSpecial = this.createLineData(keyName, 'rgba(255,0,0,1)');
							lineSpecial.data.push(price);
							this.data.datasets.push(lineSpecial);
						}
					}

				}
	
			}
		}
		
		this.data = await this.formatLabels(this.data);

		this.complete = true;
		return this.data;
	}

	@observable @action async formatLabels(_data: any){

		_data.labels.forEach((date: string, index: number) => {
			const dateFull = new Date(Number(date));
			_data.labels[index] = `${dateFull.getUTCDate()}-${dateFull.getUTCMonth()}-${dateFull.getFullYear()}`;
		});

		
		for (let index = 0; index < _data.datasets.length; index++) {

			const label = _data.datasets[index].label.replace(/((regular_)+)?((special_)+)?/, '');

			const newLabel = await this.renameOptionLabel(label);
			
			_data.datasets[index].label = newLabel;
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

		_array.forEach((_el: { label: string}, index) => {
			if (_el.label === _option) result = index;
		});

		return result;
	}

	async componentDidMount(){
		this.data = await this.formatDatesData(this.props.datesData);
		console.log(this.data)
		console.log(this.complete)
	}

	render (){
		console.log(this.data.labels)
		return (
			<>
				{ this.complete ? <Line data={this.data} /> : '' }
				{ this.data.labels ? this.data.labels.map(el => (<div>{el}</div>)) : '' }
			</>
		);
	}

}