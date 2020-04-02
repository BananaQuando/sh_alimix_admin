export interface ICategoryStore {
	getCategories: Function,
	getCategory: Function,
	saveCategory: Function,
	deleteCategory: Function
}

export interface ICategoryItem {
	id: number,
	title: string,
	parent: number | null,
	link: string,
	thumb: string | null,
	description: string | null,
}

export interface ICategoryList{
	[key: number]: ICategoryItem
}

export interface ICategoryResponce {
	id: number,
	title: string,
	parent: number | null,
	link: string,
	thumb: string | null,
	description: string | null,
}