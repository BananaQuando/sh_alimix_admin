import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { IInputDataStore, IInputDataItem } from '../../../stores/InputDataStore/interfaces';
import placeholder from './placeholder.png';
import CustomImageUpload from '../CustomImageUpload';


interface Props {
	inputID: string,
	content?: string[],
	title?: string,
	inputDataStore?: IInputDataStore,
	inputDataItem?: IInputDataItem,
	onChange?: Function,
	reset?: boolean
}

@inject('inputDataStore')
@observer
export default class CustomMultipleImageUpload extends React.Component <Props> {

	@observable images = [];
	@observable inputDataItem = {} as IInputDataItem;
	@observable onChange = this.props.onChange? this.props.onChange : () => {};
	@observable reset = this.props.reset;

	@action componentDidMount(){

		const { inputID, content } = this.props;

		this.inputDataItem = this.props.inputDataStore!.getInputDataStore(inputID, content!.length ? JSON.stringify(content) : JSON.stringify([placeholder]));
		
		this.images = JSON.parse(this.inputDataItem.inputContent);
	}

	onChangeHandler = () => {

		this.onChange();
	}

	@action resetValues = () => {

		const { inputID, content } = this.props;

		this.inputDataItem = this.props.inputDataStore!.getInputDataStore(inputID, content!.length ? JSON.stringify(content) : JSON.stringify([placeholder]));
		this.images = JSON.parse(this.inputDataItem.inputContent);
	}

	componentWillUpdate(_nextProps: Props){
		
		const { inputID, content } = _nextProps;

		if (this.inputDataItem.inputID !== inputID){

			this.inputDataItem = _nextProps.inputDataStore!.getInputDataStore(inputID, content!.length ? JSON.stringify(content) : JSON.stringify([placeholder]));
			this.images = JSON.parse(this.inputDataItem.inputContent);
		}

		if (_nextProps.reset){
			this.resetValues();
		}
	}


	render (){

		const { inputID, title } = this.props;

		return (
			<div className="form-group">
				{ title ? <label>{ title }</label> : ''}
				{ this.images.map((image: string, index) => (
					<CustomImageUpload key={index} reset={this.reset} content={image} onChange={this.onChangeHandler} inputID={`${inputID}${index}`} />
				))}
			</div>
		);
	}

}