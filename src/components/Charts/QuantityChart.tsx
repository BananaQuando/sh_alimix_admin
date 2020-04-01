import React from 'react';
import { observer } from 'mobx-react';
import { ITimeDependsDataDates } from '../../stores/ProductStore/interfaces';
import DefaultChart from './DefaultChart';

interface Props {
	datesData: ITimeDependsDataDates
}

@observer
export default class QuantityChart extends React.Component <Props> {

	chartsData = [
		{
			chartField: 'quantity',
			chartColor: 'rgba(37, 158, 59, 1)'
		}
	]

	render() {

		return (
			<>
				{ <DefaultChart datesData={ this.props.datesData } chartsData={this.chartsData} /> }
			</>
		);
	}

}