import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { IProductStore, IProductList } from '../../stores/ProductStore/interfaces';

interface Props {
	categoryID?: number
	productStore?: IProductStore
}

@inject('productStore')
@observer
export default class ProductsList extends React.Component <Props> {

	@observable productsList = {} as IProductList

	async componentDidMount(){

		const { categoryID } = this.props;

		this.productsList = await this.props.productStore!.getProductsByCategory(categoryID);
	}

	render (){


		return (
			<h1>list</h1>
		);
	}

}