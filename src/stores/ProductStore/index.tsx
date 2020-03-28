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

	@action async getProduct(_productID: number){
		
		if (this.productList[_productID]){
			 return this.productList[_productID];
		}else{

			const responce = await fetch(`${Config.host}/products/${_productID}`);
			const data = await responce.json();
		}
	}

	@action async getProductsByCategory(_categoryID: number) {
		
		if (this.categoryProductsList[_categoryID]){
			return this.productList[_categoryID];
		}else{

			const responce = await fetch(`${Config.host}/products?main_category${_categoryID}`);
			const data = await responce.json();

			data.forEach((product: IProductResponce) => {
				console.log(product)
			});
		}
	}

	@action async getProductOptionValue(_productID: number) {
		
	}

	@action async getProductPriceData(_productID: number) {
		
	}
}