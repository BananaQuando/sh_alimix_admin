import React from 'react';
import { observer, inject } from 'mobx-react';
import { ICategoryStore, ICategoryItem } from '../../stores/CategoryStore/interfaces';
import { IContentHeaderStore } from '../../stores/ContentHeaderStore/interfaces';
import { observable, action } from 'mobx';
import Card from '../../components/Card';
import ProductsList from '../../components/ProductsList';
import { IInputDataStore } from '../../stores/InputDataStore/interfaces';
import Form, { IInput } from '../../components/Forms';


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
	@observable loading = true;

	@observable inputs = [] as IInput[];

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

	@action procesPageData = (category: ICategoryItem) => {

		return {
			tabs: [
				{
					title: 'Edit category',
					link: '#edit',
					tabsID: `category_tabs_${category.id}`
				},
				{
					title: 'Products',
					link: '#products',
					tabsID: `category_tabs_${category.id}`
				}
			],
			inputs: [
				{
					inputType: 'text',
					inputID: `category_${category.id}_title`,
					inputName: 'title',
					inputValue: category.title,
					title: 'Title'
				},
				{
					inputType: 'editor',
					inputID: `category_${category.id}_dedscription`,
					inputValue: category.description,
					inputName: 'description',
					title: 'Description'
				},
				{
					inputType: 'image',
					inputID: `category_${category.id}_thumb`,
					inputValue: category.thumb,
					inputName: 'thumb',
					title: 'Thumbnail'
				},
			]
		}
	}

	async componentWillReceiveProps(nextProps: Props){

		const { categoryID } = nextProps.match.params;
		
		if (this.category.id !== categoryID){

			this.loading = true;

			this.category = await nextProps.categoryStore.getCategory(categoryID);
			
			const categoryData = this.procesPageData(this.category);

			this.tabs = categoryData.tabs;
			this.inputs = categoryData.inputs;
			this.loading = false;
		}

		this.setSeoData();
	}

	async componentDidMount(){

		const { categoryID } = this.props.match.params;

		this.category = await this.props.categoryStore.getCategory(categoryID);

		const categoryData = this.procesPageData(this.category);

		this.tabs = categoryData.tabs;
		this.inputs = categoryData.inputs;

		this.setSeoData();
		this.loading = false;
	}

	@action setReset = () => {
		this.reset = true;
	}

	@action setResetForm = () => {

		this.resetForm = true;
		this.reset = false;
		setTimeout(() => {this.resetForm = false;}, 0);
	}

	@action saveForm = async () => {

		for (let i = 0; i < this.inputs.length; i++){
			const input = this.inputs[i];
			// @ts-ignore
			if (this.category.hasOwnProperty(input.inputName)) this.category[input.inputName] = (await this.props.inputDataStore.getInputDataStore(input.inputID)).inputContent;
		}
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

		const { id } = this.category;

		return (
			<div className="row">
				<div className="col-md-10">
					<Card id={`category_tabs_${this.props.match.params.categoryID}`} cardTabs={this.tabs}>
						<div className="tab-content">
							<div className="tab-pane active" id="edit">
								<Form loading={this.loading} onInputsChange={this.setReset} resetForm={this.resetForm} inputs={this.inputs} />
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