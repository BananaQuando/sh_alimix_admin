import React from 'react';
import { observer, inject } from 'mobx-react';
import { ICategoryStore, ICategoryItem } from '../../stores/CategoryStore/interfaces';
import { IContentHeaderStore } from '../../stores/ContentHeaderStore/interfaces';
import { observable } from 'mobx';
import CustomEditor from '../../components/Forms/CustomEditor';
import Card from '../../components/Card';
import CustomTextInput from '../../components/Forms/CustomTextInput';
import CustomImageUpload from '../../components/Forms/CustomImageUpload';

interface Props {
	match: {
		params: {
			categoryID: number;
		}
	},
	categoryStore: ICategoryStore,
	category: ICategoryItem,
	contentHeaderStore: IContentHeaderStore,
	setSeoData: Function
}

@inject('contentHeaderStore')
@inject('categoryStore')
@observer
export default class Categories extends React.Component <Props> {

	@observable category = {} as ICategoryItem

	async componentDidMount(){

		const { categoryID } = this.props.match.params;

		this.category = await this.props.categoryStore.getCategory(categoryID);

		this.setSeoData();
	}

	setSeoData(){

		this.props.contentHeaderStore.setTitie(`Категория "${this.category.title}"`);
		this.props.contentHeaderStore.setBreadcrumbs([
			{
				title: 'Главная',
				link: '/',
				isCurrent: false
			},
			{
				title: 'Категории',
				link: '/categories',
				isCurrent: false
			},
			{
				title: this.category.title,
				link: `/categories/${this.category.id}`,
				isCurrent: true
			}
		]);
	}

	render (){

		const { id, title, description, thumb } = this.category;

		return (
			<Card title='Edit category'>
				{ title ? <CustomTextInput title='Title' content={ title } inputID={`category_${id}_title`} /> : '' }
				{ description ? <CustomEditor title='Description' content={ description } inputID={`category_${id}_description`} /> : '' }
				{ thumb ? <CustomImageUpload title='Thumbnail' content={ thumb } inputID={`category_${id}_thumb`} /> : '' }
			</Card>
		);
	}

}