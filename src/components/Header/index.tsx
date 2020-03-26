import React from 'react';



export default class Header extends React.Component {


	render (){
		return (
			<nav className="main-header navbar navbar-expand navbar-white navbar-light">
				<ul className="navbar-nav">
					<li className="nav-item d-none d-sm-inline-block"><a className="nav-link" href="index3.html">Home</a></li>
					<li className="nav-item d-none d-sm-inline-block"><a className="nav-link" href="#1">Contact</a></li>
				</ul>
				<form className="form-inline ml-3">
					<div className="input-group input-group-sm"><input className="form-control form-control-navbar" type="search" placeholder="Search" />
					</div>
				</form>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item dropdown"><a className="nav-link" href="#1" data-toggle="dropdown"> 3 </a>
						<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
							<div className="media"><img className="img-size-50 mr-3 img-circle" src="dist/img/user1-128x128.jpg" alt="User Avatar" />
								<div className="media-body">
									<h3 className="dropdown-item-title">Brad Diesel</h3>
									<p className="text-sm">Call me whenever you can...</p>
									<p className="text-sm text-muted">4 Hours Ago</p>
								</div>
							</div>
							<div className="media"><img className="img-size-50 img-circle mr-3" src="dist/img/user8-128x128.jpg" alt="User Avatar" />
								<div className="media-body">
									<h3 className="dropdown-item-title">John Pierce</h3>
									<p className="text-sm">I got your message bro</p>
									<p className="text-sm text-muted">4 Hours Ago</p>
								</div>
							</div>
							<div className="media"><img className="img-size-50 img-circle mr-3" src="dist/img/user3-128x128.jpg" alt="User Avatar" />
								<div className="media-body">
									<h3 className="dropdown-item-title">Nora Silvester</h3>
									<p className="text-sm">The subject goes here</p>
									<p className="text-sm text-muted">4 Hours Ago</p>
								</div>
							</div>
							<a className="dropdown-item dropdown-footer" href="#1">See All Messages</a></div>
					</li>
					<li className="nav-item dropdown"><a className="nav-link" href="#1" data-toggle="dropdown"> 15 </a>
						<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">15 Notifications
							<a className="dropdown-item" href="#1"> 4 new messages 3 mins </a>
							<a className="dropdown-item" href="#1"> 8 friend requests 12 hours </a>
							<a className="dropdown-item" href="#1"> 3 new reports 2 days </a>
							<a className="dropdown-item dropdown-footer" href="#1">See All Notifications</a>
						</div>
					</li>
				</ul>
			</nav>
		);
	}

}