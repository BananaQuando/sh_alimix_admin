import React from 'react';
import { observer, inject } from 'mobx-react';
import { Doughnut, Line } from 'react-chartjs-2';
import { IProductStore, IProductItem } from '../../stores/ProductStore/interfaces';
import { IContentHeaderStore } from '../../stores/ContentHeaderStore/interfaces';
import { observable, action } from 'mobx';
import { ICategoryStore, ICategoryItem } from '../../stores/CategoryStore/interfaces';
import Card from '../../components/Card';
import CustomTextInput from '../../components/Forms/CustomTextInput';
import CustomEditor from '../../components/Forms/CustomEditor';
import { IInputDataStore } from '../../stores/InputDataStore/interfaces';
import CustomImageUpload from '../../components/Forms/CustomImageUpload';
import PriceChart from '../../components/PriceChart';

interface Props {
	match: {
		params: {
			productID: number;
		}
	},
	categoryStore: ICategoryStore,
	productStore: IProductStore,
	category: ICategoryItem,
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


	async componentDidMount(){

		const { productID } = this.props.match.params;

		this.product = await this.props.productStore.getProduct(productID);

		if (!Object.keys(this.product.dates).length){
			this.product.dates = await this.props.productStore.getProductPriceData(this.product.id);
		}

		this.category = await this.props.categoryStore.getCategory(this.product.mainCategory);

		this.setSeoData();

		if (this.product.name !== await this.getInputValue('name') || this.product.description !== await this.getInputValue('description')){
			this.reset = true;
		}
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

	getInputValue = async (inputName: string) => {

		const { id } = this.product;

		const data = await this.props.inputDataStore.getInputDataStore(`product_${id}_${inputName}`);

		return data.inputContent;
	}

	@action saveForm = async () => {

		this.product.name = await this.getInputValue('name');
		this.product.description = await this.getInputValue('description');
		this.product.thumbnail = await this.getInputValue('thumbnail');

		this.props.productStore.saveProduct(this.product);
		this.reset = false;
	}

	@action deleteProduct = async () => {

		const { id } = this.product;

		this.props.productStore.deleteProduct(id);
	}

	render (){

		const { id, name, description, thumbnail, dates } = this.product;
		return (
			<div className="row">
				<div className="col-md-10">
					<Card title='Edit'>
						{ name ? <CustomTextInput onChange={this.setReset} reset={this.resetForm} title='Name' inputID={`product_${id}_name`} content={name} /> : '' }
						{ description ? <CustomEditor onChange={this.setReset} reset={this.resetForm} title='Description' inputID={`product_${id}_description`} content={description} /> : '' }
						{ description ? <CustomImageUpload onChange={this.setReset} reset={this.resetForm} title='Thumbnail' inputID={`product_${id}_thumbnail`} content={thumbnail} /> : '' }
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
					<Card title='Prices'>
						{ dates && Object.keys(dates).length ? <PriceChart datesData={dates} /> : '' }
					</Card>
				</div>
			</div>
		);
	}

}