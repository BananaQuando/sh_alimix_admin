import {
	observable,
	action,
	// computed
} from "mobx";
import { IProductItem, IProductList, IProductResponce, ICategoryProductsList, IProductStore, ITimeDependsDataDates, ITimeDependsDataDatesResponce, ITimeDependsDataResponce } from './interfaces'
import { Config } from "../../Config";



export class ProductStore implements IProductStore {

	@observable productList = {} as IProductList;
	@observable categoryProductsList = {} as ICategoryProductsList;

	async formatProductData(productResponce: IProductResponce): Promise<IProductItem> {

		// const responce = await fetch(`${Config.host}/time_depends_data?product_id=${productResponce.id}`);

		// const dates = await responce.json();

		return {
			id: productResponce.id,
			name: productResponce.name,
			description: productResponce.description,
			currency: productResponce.currency,
			languageID: productResponce.language_id,
			mainCategory: productResponce.main_category,
			rating: productResponce.rating,
			ordersCount: productResponce.orders_count,
			reviews: productResponce.reviews,
			thumbnail: productResponce.thumbnail,
			images: productResponce.images,
			options: productResponce.options,
			prices: productResponce.prices,
			dates: {}
		}
	}

	@action async getProduct(_productID: number){
		
		if (this.productList[_productID]){
			 return this.productList[_productID];
		}else{

			const responce = await fetch(`${Config.host}/products/${_productID}`);
			const data = await responce.json();

			this.productList[data.id] = await this.formatProductData(data);

			return this.productList[data.id];
		}
	}

	async fetchProducts(list: number[]) {
		return Promise.all(list.map(async (id) => await this.getProduct(id)))
	}

	@action async getProductsByCategory(_categoryID: number) {
		
		if (this.categoryProductsList[_categoryID]){
			
			return await this.fetchProducts(this.categoryProductsList[_categoryID]);
		}else{

			;

			// const responce = await fetch(`${Config.host}/category_products/${_categoryID}`);
			// const data = await responce.json();

			const data = {
				id: 1,
				products: [1,2,3,4]
			}

			this.categoryProductsList[_categoryID] = data.products;

			return await this.fetchProducts(data.products);
		}
	}

	@action async getProductOptionValue(_productID: number) {
		
	}

	@action async getProductPriceData(_productID: number) {
		
	}

	@action async saveProduct(_product: IProductItem){
		
		console.log('saving product')
	}

	@action async deleteProduct(_productID: number){

		console.log('deleting product')
	}
}