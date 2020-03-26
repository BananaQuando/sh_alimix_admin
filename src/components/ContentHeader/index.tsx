import React from 'react';



export default class ContentHeader extends React.Component {

	render (){
		return (
			<div className="content-header">
				<div className="container-fluid">
					<div className="row mb-2">
						<div className="col-sm-6">
							<h1 className="m-0 text-dark">Dashboard</h1>
						</div>
						<div className="col-sm-6">
							<ol className="breadcrumb float-sm-right">
								<li className="breadcrumb-item"><a href="#1">Home</a></li>
								<li className="breadcrumb-item active">Dashboard v1</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		);
	}

}