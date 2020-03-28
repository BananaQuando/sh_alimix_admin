import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { IInputDataStore, IInputDataItem } from '../../../stores/InputDataStore/interfaces';

interface Props {
	inputID: string,
	content?: string,
	title?: string,
	inputDataStore?: IInputDataStore,
	inputDataItem?: IInputDataItem
}

@inject('inputDataStore')
@observer
export default class CustomTextInput extends React.Component <Props> {

	@observable inputValue = '';
	@observable inputDataItem = {} as IInputDataItem

	@action componentDidMount(){

		const { inputID } = this.props;

		this.inputDataItem = this.props.inputDataStore!.getInputDataStore(inputID, this.props.content);
		
		this.inputValue = this.inputDataItem.inputContent;
	}

	@action onContentChangeHandler (_event: any) {

		this.inputValue = _event.target.value;
		this.inputDataItem.inputContent = _event.target.value;
	};


	render (){

		const { inputID, title } = this.props;

		return (
			<div className="form-group">
				{ title ? <label htmlFor={inputID}>{ title }</label> : ''}
				<input type='test' className='form-control' id={inputID} value={this.inputValue} onChange={this.onContentChangeHandler} />
			</div>
		);
	}

}