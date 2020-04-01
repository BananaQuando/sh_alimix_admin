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
			chartField: 'regular',
			chartColor: 'rgba(0, 123, 255, 1)'
		},
		{
			chartField: 'special',
			chartColor: 'rgba(227, 95, 108, 1)'
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