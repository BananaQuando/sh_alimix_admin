import React from 'react';
import { observer, inject } from 'mobx-react';
import { ICategoryStore, ICategoryItem } from '../../stores/CategoryStore/interfaces';
import { IContentHeaderStore } from '../../stores/ContentHeaderStore/interfaces';
import { observable, action } from 'mobx';
import CustomEditor from '../../components/Forms/CustomEditor';
import Card from '../../components/Card';
import CustomTextInput from '../../components/Forms/CustomTextInput';
import CustomImageUpload from '../../components/Forms/CustomImageUpload';
import ProductsList from '../../components/ProductsList';
import { IInputDataStore } from '../../stores/InputDataStore/interfaces';

interface Props {
	match: {
		params: {
			categoryID: number;
		}
	},
	categoryStore: ICategoryStore,
	contentHeaderStore: IContentHeaderStore,
	inputDataStore: IInputDataStore
}


@inject('contentHeaderStore')
@inject('categoryStore')
@inject('inputDataStore')
@observer
export default class Categories extends React.Component <Props> {

	@observable category = {} as ICategoryItem;
	@observable reset = false;
	@observable resetForm = false;

	@observable tabs = [
		{
			title: 'Edit category',
			link: '#edit',
			tabsID: `category_tabs_${this.props.match.params.categoryID}`
		},
		{
			title: 'Products',
			link: '#products',
			tabsID: `category_tabs_${this.props.match.params.categoryID}`
		}
	];

	async componentWillReceiveProps(nextProps: Props){

		const { categoryID } = nextProps.match.params;
		
		if (this.category.id !== categoryID){
			this.category = await nextProps.categoryStore.getCategory(categoryID);
			
			this.tabs = [
				{
					title: 'Edit category',
					link: '#edit',
					tabsID: `category_tabs_${nextProps.match.params.categoryID}`
				},
				{
					title: 'Products',
					link: '#products',
					tabsID: `category_tabs_${nextProps.match.params.categoryID}`
				}
			];
		}

		this.setSeoData();
	}

	async componentDidMount(){

		const { categoryID } = this.props.match.params;

		this.category = await this.props.categoryStore.getCategory(categoryID);

		this.setSeoData();
	}

	@action setReset = () => {
		this.reset = true;
	}

	@action setResetForm = () => {

		this.resetForm = true;
		this.reset = false;
		setTimeout(() => {this.resetForm = false;}, 0);
	}

	getInputValue = async (inputName: string) => {

		const { id } = this.category;

		const data = await this.props.inputDataStore.getInputDataStore(`category_${id}_${inputName}`);

		return data.inputContent;
	}

	@action saveForm = async () => {

		this.category.title = await this.getInputValue('title');
		this.category.description = await this.getInputValue('description');
		this.category.thumb = await this.getInputValue('thumb');

		this.props.categoryStore.saveCategory(this.category);
		this.reset = false;
	}

	@action deleteCategory = async () => {

		const { id } = this.category;

		this.props.categoryStore.deleteCategory(id);
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
			<div className="row">
				<div className="col-md-10">
					<Card id={`category_tabs_${this.props.match.params.categoryID}`} cardTabs={this.tabs}>
						<div className="tab-content">
							<div className="tab-pane active" id="edit">
								{ title ? <CustomTextInput onChange={this.setReset} reset={this.resetForm} title='Title' content={ title } inputID={`category_${id}_title`} /> : '' }
								{ description ? <CustomEditor onChange={this.setReset} reset={this.resetForm} title='Description' content={ description } inputID={`category_${id}_description`} /> : '' }
								{ thumb ? <CustomImageUpload onChange={this.setReset} reset={this.resetForm} title='Thumbnail' content={ thumb } inputID={`category_${id}_thumb`} /> : '' }
							</div>
							<div className="tab-pane" id="products">
								<ProductsList categoryID={id} />
							</div>
						</div>
					</Card>
			</div>
			<div className="col-md-2">
				<Card title='Action'>
						{
							this.reset ? 
							<>
								<button type="button" onClick={this.saveForm} className="btn btn-block btn-primary mb-2">Save</button>
								<button type="button" onClick={this.setResetForm} className="btn btn-block btn-warning mb-10">Reset</button>
							</>
							: ''
						}
						<button type="button" className="btn btn-block btn-danger">Delete</button>
					</Card>
			</div>
		</div>
		);
	}

}