import {
	observable,
	action,
	// computed
} from "mobx";
import { IMenuResponce, ISidebarMenuStore, IMenuList } from './interfaces'


const menuData = [
	{
		"id": 1,
		"title": "Categories",
		"parent": null,
		"link": "/categories",
		"icon": "fas fa-cube"
	},
	{
		"id": 2,
		"title": "Одежда",
		"parent": 1,
		"link": "/categories/1",
		"icon": "fas fa-tshirt"
	},
	{
		"id": 3,
		"title": "Не одежда",
		"parent": 1,
		"link": "/categories/2",
		"icon": "fas fa-shield-alt"
	}
]


export class SidebarMenuStore implements ISidebarMenuStore {

	@observable menuList = {} as IMenuList;

	@action async getMenuList(){

		if (Object.keys(this.menuList).length){

			return this.menuList;
		}else{

			const data = menuData;
			
			data.forEach((el: IMenuResponce) => {

				this.menuList[el.id] = {
					id: el.id,
					title: el.title,
					parent: el.parent,
					link: el.link,
					icon: el.icon,
					chidrens: {} as IMenuList
				};
			});

			return this.menuList;
		}
	}

	@action async getMenuItem(item_id: number) {

		if(this.menuList[item_id]){

			return this.menuList[item_id];
		}else{

			this.menuList = await this.getMenuList();
			
			return this.menuList[item_id]
		}
	}

	@action async getMenu(){

		if (Object.keys(this.menuList).length){

			return this.menuList;
		}else{

			this.menuList = await this.getMenuList();
			
			for (const key in this.menuList) {
				if (this.menuList.hasOwnProperty(key)) {
					const menuItem = this.menuList[key];
					
					if (menuItem.parent){

						this.menuList[menuItem.parent].chidrens![key] = {
							id: menuItem.id,
							title: menuItem.title,
							link: menuItem.link,
							icon: menuItem.icon,
							parent: menuItem.parent
						}

						delete this.menuList[key];
					}
				}
			}


			return this.menuList;
		}
	}
}