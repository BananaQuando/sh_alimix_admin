import React from 'react';
import SidebarMenu from './SidebarMenu';


export default class Sidebar extends React.Component {


	render (){
		return (
			<aside className="main-sidebar sidebar-dark-primary elevation-4"><a className="brand-link" href="index3.html"><img className="brand-image img-circle elevation-3" src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" /> AdminLTE 3 </a>
				<div className="sidebar">
					<div className="user-panel mt-3 pb-3 mb-3 d-flex">
						<div className="image"><img className="img-circle elevation-2" src="dist/img/user2-160x160.jpg" alt="User" /></div>
						<div className="info"><a className="d-block" href="#1">Alexander Pierce</a></div>
					</div>
				</div>
				<SidebarMenu />
			</aside>
		);
	}

}