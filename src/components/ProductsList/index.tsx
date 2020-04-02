import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { IProductStore, IProductItem } from '../../stores/ProductStore/interfaces';
import Card from '../Card';
import Table from '../Table';
import { Link } from 'react-router-dom';

interface Props {
	categoryID?: number
	productStore?: IProductStore
}

interface tableFormat{
	tableHead: string[]
	tableBody: any[][]
}

@inject('productStore')
@observer
export default class ProductsList extends React.Component <Props> {

	@observable productsList = [] as IProductItem[];
	tableData: tableFormat = {
		tableHead: [],
		tableBody: []
	};

	async componentDidMount(){

		const { categoryID } = this.props;

		this.productsList = await this.props.productStore!.getProductsByCategory(categoryID);
	}

	async componentWillReceiveProps(_nextProps: Props){

		const { categoryID } = _nextProps;

		this.productsList = await _nextProps.productStore!.getProductsByCategory(categoryID);
	}

	@observable formatTableData() {

		

		const tableData: tableFormat = {
			tableHead: ['id', 'Image', 'Name', 'Price', 'OrdersCount', 'Action'],
			tableBody: [],
		};

		this.productsList.forEach((product: IProductItem) => {

			const {special_max_price, special_min_price, min_price, max_price} = product.prices

			let productPrice;

			if (special_max_price){
				
				productPrice =  <div className="product-price">
									<div className="product-price__old">{min_price}-{max_price} {product.currency}</div>
									<div className="product-price__current">{special_min_price}-{special_max_price} {product.currency}</div>
								</div>
			}else{
				productPrice =  <div className="product-price">
									<div className="product-price__current">{min_price}-{max_price} {product.currency}</div>
								</div>
			}

			tableData.tableBody.push([
				String(product.id),
				<img className="product-thumb" src={product.thumbnail} alt={product.name} />,
				product.name,
				productPrice,
				product.ordersCount,
				<Link to={`/products/${product.id}`}>Edit</Link>
			]);
		});

		return tableData;
	}

	render (){

		return (
			<div>
				<Card title='Products' cardBodyClass='p-0'>
					<Table tableData={this.formatTableData()}></Table>
				</Card>
			</div>

		);
	}

}