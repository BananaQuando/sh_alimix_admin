import {
	observable, action,
	// action,
	// computed
} from "mobx";
import { IContentHeaderStore } from "./interfaces";

export class ContentHeaderStore implements IContentHeaderStore {

	@observable headingTitle = '';
	@observable breadcrumbs = [
		{
			title: '',
			link: '/',
			isCurrent: true
		}
	];
	
	@action setTitie(t: string){
		this.headingTitle = t;
	}

	@action setBreadcrumbs(b: {
		title: string,
		link: string,
		isCurrent: boolean
	}[]){
		this.breadcrumbs = b;
	}
}