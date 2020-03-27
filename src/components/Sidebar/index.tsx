import React from 'react';
import SidebarMenu from './SidebarMenu';
import Logo from './Logo.jpg';
import UserPic from './UserPlaceholder.jpg';
import { Link } from 'react-router-dom';


export default class Sidebar extends React.Component {


	render (){
		return (
			<aside className="main-sidebar sidebar-dark-primary elevation-4">
				<Link to='/' className='brand-link'>
					<img className="brand-image img-circle elevation-3" src={Logo} alt="Quando" />Quando
				</Link>
				<div className="sidebar">
					<div className="user-panel mt-3 pb-3 mb-3 d-flex">
						<div className="image"><img className="img-circle elevation-2" src={UserPic} alt="User" /></div>
						<div className="info"><span className="d-block">Andrey Shuvalov</span></div>
					</div>
				</div>
				<SidebarMenu />
			</aside>
		);
	}

}