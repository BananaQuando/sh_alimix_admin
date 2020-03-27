import React from 'react';
import { observer, inject } from 'mobx-react';
import { ICategoryStore, ICategoryList } from '../../stores/CategoryStore/interfaces';
import { IContentHeaderStore } from '../../stores/ContentHeaderStore/interfaces';


interface Props {
	categoryStore: ICategoryStore,
	categoryList: ICategoryList,
	contentHeaderStore: IContentHeaderStore,
	setSeoData: Function
}

@inject('contentHeaderStore')
@inject('categoryStore')
@observer
export default class Categories extends React.Component <Props> {

	componentDidMount(){

		this.setSeoData();
	}

	async setSeoData(){

		this.props.contentHeaderStore.setTitie(`Категории`);
		this.props.contentHeaderStore.setBreadcrumbs([
			{
				title: 'Главная',
				link: '/',
				isCurrent: false
			},
			{
				title: 'Категории',
				link: '/users',
				isCurrent: true
			}
		]);
	}

	render (){
		return (
			<>Categories</>
		);
	}

}