export interface IProductStore {
	getProduct: Function,
	getProductsByCategory: Function,
	getProductOptionValue: Function,
	getProductPriceData: Function,
	saveProduct: Function,
	deleteProduct: Function
}

export interface IProductItem {
	id: number,
	name: string,
	description: string | null,
	currency: number | null,
	languageID: number,
	mainCategory: number,
	rating: number,
	ordersCount: number,
	reviews: number,
	thumbnail: string,
	images: string[],
	options: {
		[key: string]: number[]
	},
	prices: {
		min_price: number,
		max_price: number,
		special_min_price: number,
		special_max_price: number
	},
	dates: ITimeDependsDataDates
}

export interface ITimeDependsDataDates {
	[key: number]: {
		regular: {
			[key: number]: number
		},
		special: {
			[key: number]: number
		},
		quantity: {
			[key: number]: number
		},
		totalOrders: number
	}
}


export interface IProductList{
	[key: number]: IProductItem
}

export interface ICategoryProductsList{
	[key: number]: number[]
}

export interface IProductResponce {
	id: number,
	name: string,
	description: string | null,
	currency: number | null,
	language_id: number,
	main_category: number,
	rating: number,
	orders_count: number,
	default_url: string,
	reviews: number,
	thumbnail: string,
	images: string[],
	options: {
		[key: string]: number[]
	},
	prices: {
		min_price: number,
		max_price: number,
		special_min_price: number,
		special_max_price: number
	}
}


export interface ITimeDependsDataResponce {
	id: number,
	product_id: number,
	dates: ITimeDependsDataDatesResponce
}

export interface ITimeDependsDataDatesResponce {
	[key: number]: {
		regular: {
			[key: number]: number
		},
		special: {
			[key: number]: number
		},
		quantity: {
			[key: number]: number
		},
		totalOrders: number
	}
}

