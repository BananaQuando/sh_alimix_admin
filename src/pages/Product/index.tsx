import React from 'react';
import { observer, inject } from 'mobx-react';
import { IProductStore, IProductItem } from '../../stores/ProductStore/interfaces';
import { IContentHeaderStore } from '../../stores/ContentHeaderStore/interfaces';
import { observable, action } from 'mobx';
import { ICategoryStore, ICategoryItem } from '../../stores/CategoryStore/interfaces';
import Card from '../../components/Card';
import { IInputDataStore } from '../../stores/InputDataStore/interfaces';
import PriceChart from '../../components/Charts/PriceChart';
import QuantityChart from '../../components/Charts/QuantityChart';
import Form, { IInput } from '../../components/Forms';

interface Props {
	match: {
		params: {
			productID: number;
		}
	},
	categoryStore: ICategoryStore,
	productStore: IProductStore,
	contentHeaderStore: IContentHeaderStore,
	inputDataStore: IInputDataStore
}

@inject('contentHeaderStore')
@inject('productStore')
@inject('categoryStore')
@inject('inputDataStore')
@observer
export default class Product extends React.Component <Props> {

	@observable product = {} as IProductItem
	@observable category = {} as ICategoryItem
	@observable reset = false;
	@observable resetForm = false;
	@observable loading = true;

	@observable inputs = [] as IInput[];

	@observable tabs = {
		chartTabs: [
			{
				title: 'Prices',
				link: '#prices',
				tabsID: `product_tabs_${this.props.match.params.productID}`
			},
			{
				title: 'Quantity',
				link: '#quantity',
				tabsID: `product_tabs_${this.props.match.params.productID}`
			}
		]
	}

	@action procesPageData = (product: IProductItem) => {

		return {
			tabs: {
				chartTabs: [
					{
						title: 'Prices',
						link: '#prices',
						tabsID: `product_tabs_${product.id}`
					},
					{
						title: 'Quantity',
						link: '#quantity',
						tabsID: `product_tabs_${product.id}`
					}
				]
			},
			inputs: [
				{
					inputType: 'text',
					inputID: `product_${product.id}_name`,
					inputName: 'name',
					inputValue: product.name,
					title: 'Name'
				},
				{
					inputType: 'editor',
					inputID: `product_${product.id}_description`,
					inputValue: product.description,
					inputName: 'description',
					title: 'Description'
				},
				{
					inputType: 'image',
					inputID: `product_${product.id}_thumb`,
					inputValue: product.thumbnail,
					inputName: 'thumbnail',
					title: 'Thumbnail'
				},
				{
					inputType: 'multiple-image',
					inputID: `product_${product.id}_images`,
					inputValue: product.images,
					inputName: 'images',
					title: 'Images'
				},
			]
		}
	}


	async componentDidMount(){

		const { productID } = this.props.match.params;

		this.product = await this.props.productStore.getProduct(productID);

		const productData = this.procesPageData(this.product);

		this.tabs = productData.tabs;
		this.inputs = productData.inputs;

		this.loading = false;

		this.category = await this.props.categoryStore.getCategory(this.product.mainCategory);

		this.setSeoData();

		if (!Object.keys(this.product.dates).length){
			this.product.dates = await this.props.productStore.getProductPriceData(this.product.id);
		}
	}

	async componentWillReceiveProps(_nextProps: Props){

		const { productID: nextProductID } = _nextProps.match.params;

		if (this.product.id !== nextProductID){

			this.loading = true;

			this.product = await _nextProps.productStore.getProduct(nextProductID);
			
			const productData = this.procesPageData(this.product);

			this.tabs = productData.tabs;
			this.inputs = productData.inputs;
			this.loading = false;
		}

		this.setSeoData();
	}


	setSeoData(){

		this.props.contentHeaderStore.setTitie(`Товар "${this.product.name}"`);
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
				isCurrent: false
			},
			{
				title: this.product.name,
				link: `/categories/${this.product.id}`,
				isCurrent: true
			}
		]);
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
			if (this.product.hasOwnProperty(input.inputName)) this.product[input.inputName] = (await this.props.inputDataStore.getInputDataStore(input.inputID)).inputContent;
		}
		this.props.productStore.saveProduct(this.product);
		this.reset = false;
	}

	@action deleteProduct = async () => {

		const { id } = this.product;

		this.props.productStore.deleteProduct(id);
	}

	render (){

		const { dates } = this.product;

		return (
			<div className="row">
				<div className="col-md-10">
					<Card title='Edit'>
						<div className="tab-content">
							<Form loading={this.loading} onInputsChange={this.setReset} resetForm={this.resetForm} inputs={this.inputs} />
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
				<div className="col-md-12">
					<Card id={`product_tabs_${this.props.match.params.productID}`} cardTabs={this.tabs.chartTabs} >
						<div className="tab-content">
							<div className="tab-pane active" id="prices">
								{ dates && Object.keys(dates).length ? <PriceChart datesData={dates} /> : '' }
							</div>
							<div className="tab-pane" id="quantity">
								{ dates && Object.keys(dates).length ? <QuantityChart datesData={dates} /> : '' }
							</div>
						</div>
					</Card>
				</div>
			</div>
		);
	}

}