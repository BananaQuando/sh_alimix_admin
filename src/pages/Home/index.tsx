import React from 'react';
import { inject, observer } from 'mobx-react';
import { IContentHeaderStore } from '../../stores/ContentHeaderStore/interfaces';

interface Props {
	contentHeaderStore: IContentHeaderStore,
	setSeoData: Function
}

@inject('contentHeaderStore')
@inject('categoryStore')
@observer
export default class Home extends React.Component <Props> {

	componentDidMount(){

		this.setSeoData();
	}

	async setSeoData(){

		this.props.contentHeaderStore.setTitie(`Главная`);
		this.props.contentHeaderStore.setBreadcrumbs([
			{
				title: 'Главная',
				link: '/',
				isCurrent: true
			}
		]);
	}

	render (){
		return (
			<>Home</>
		);
	}

}