import React from 'react';
import { observer } from 'mobx-react';
import WithLoader, { LoadingProps } from '../../HOC/WithLoader';
import { Line } from 'react-chartjs-2';

interface ChartProps extends LoadingProps {
	data?: any,
	loading?: boolean,
	type?: string
}

@observer
class Chart extends React.Component <ChartProps> {

	render() {

		return (
			<>
				{ <Line data={ this.props.data } /> }
			</>
		);
	}

}

export default WithLoader(Chart);