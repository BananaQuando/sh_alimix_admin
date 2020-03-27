import {
	observable,
	action,
	// computed
} from "mobx";
import { ICategoryResponce, ICategoryItem, ICategoryList, ICategoryStore } from './interfaces'
import { Config } from "../../Config";



export class CategoryStore implements ICategoryStore {

	@observable categoryList = {} as ICategoryList;

	@action async getCategories(){

		if (Object.keys(this.categoryList).length){

			return this.categoryList;
		}else{

			const responce = await fetch(`${Config.host}/categories`);

			const data = await responce.json();
			
			data.forEach(async (el: ICategoryResponce) => {

				this.categoryList[el.id] = await this.formatCategoryResponce(el);
			});

			return this.categoryList;
		}
	}

	async formatCategoryResponce(responce: ICategoryResponce): Promise<ICategoryItem>{

		return {
			id: responce.id,
			title: responce.title,
			description: responce.description,
			parent: responce.parent,
			link: responce.link,
			thumb: responce.thumb
		}
	}

	@action async getCategory(categoryID: number) {

		if (this.categoryList[categoryID]){

			return this.categoryList[categoryID];
		}else{

			const responce = await fetch(`${Config.host}/categories/${categoryID}`);

			const data: ICategoryResponce = await responce.json();
			
			this.categoryList[data.id] = await this.formatCategoryResponce(data);

			return this.categoryList[data.id];
		}
	}
}