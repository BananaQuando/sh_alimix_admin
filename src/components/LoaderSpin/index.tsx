import React from 'react';
import './styles.sass';

class LoaderSpin extends React.Component {

	render() {

		return (
			<div className="spinner-wrapper">
				<div className="loader-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
			</div>
		);
	}

}

export default LoaderSpin;