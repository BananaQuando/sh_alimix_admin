export interface ISidebarMenuStore {
	getMenu: Function
}

export interface IMenuListItem {
	id: number,
	title: string,
	link: string,
	parent: number | null,
	icon: string | null,
	chidrens?: IMenuList
}

export interface IMenuList{
	[key: number]: IMenuListItem
}

export interface IMenuResponce {
	id: number,
	title: string,
	parent: number | null,
	link: string,
	icon: string | null
}