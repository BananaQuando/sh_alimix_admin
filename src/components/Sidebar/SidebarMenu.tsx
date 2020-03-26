import React from 'react';
import { inject, observer } from "mobx-react";
import { ISidebarMenuStore, IMenuList } from '../../stores/SidebarMenuStore/interfaces';
import { observable, action } from 'mobx';
import { Link } from 'react-router-dom';


interface Props {
	sidebarMenuStore?: ISidebarMenuStore,
	menuList?: IMenuList
}

@inject('sidebarMenuStore')
@observer
export default class SidebarMenu extends React.Component <Props> {

	@observable menuList = {} as IMenuList;

	async componentDidMount(){

		this.menuList = await this.props.sidebarMenuStore!.getMenu();
	}

	@action generateMenu(menu: IMenuList){


		for (const key in menu) {
			if (menu.hasOwnProperty(key)) {
				const menuElement = menu[key];

				if(menuElement.chidrens){
					return <li className="nav-item has-treeview menu-open">
								<Link to={menuElement.link}>{ menuElement.icon ? <i className={menuElement.icon}></i> : '' }{menuElement.title}</Link>
								<ul className="nav nav-treeview">
									{ this.generateMenu(menuElement.chidrens) }
								</ul>
							</li>
				}else{
					return <li className="nav-item">
								<Link to={menuElement.link}>{ menuElement.icon ? <i className={menuElement.icon}></i> : '' }{menuElement.title}</Link>
							</li>
				}
			}
		}

		return '';
	}

	render (){

		return (
			<nav className="mt-2">
				<ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" data-accordion="false">
					{ Object.keys(this.menuList).length ? this.generateMenu(this.menuList) : '' }
				</ul>
			</nav>
		);
	}

}