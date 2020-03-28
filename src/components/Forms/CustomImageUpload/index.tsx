import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { IInputDataStore, IInputDataItem } from '../../../stores/InputDataStore/interfaces';
import placeholder from './placeholder.png';


interface Props {
	inputID: string,
	content?: string,
	title?: string,
	inputDataStore?: IInputDataStore,
	inputDataItem?: IInputDataItem
}

@inject('inputDataStore')
@observer
export default class CustomImageUpload extends React.Component <Props> {

	@observable imageValue = placeholder;
	@observable inputDataItem = {} as IInputDataItem

	@action componentDidMount(){

		const { inputID, content } = this.props;

		this.inputDataItem = this.props.inputDataStore!.getInputDataStore(inputID, content ? content : placeholder);
		
		this.imageValue = this.inputDataItem.inputContent;
	}

	@action onFileChangeHandler = (_event: any) => {

		if (_event.target.files && _event.target.files[0]){
			const imageURL = URL.createObjectURL(_event.target.files[0]);
			console.log(imageURL)
			console.log(_event.target.files[0])

			this.imageValue = imageURL;
			this.inputDataItem.inputContent = imageURL;
		}
	};


	render (){

		const { inputID, title } = this.props;

		return (
			<div className="form-group">
				{ title ? <label htmlFor={inputID}>{ title }</label> : ''}
				<div className='form-upload'>
					<label htmlFor={inputID} className='form-upload__image'>
						<img src={this.imageValue} alt={ title ? title : ''} />
					</label>
					<label htmlFor={inputID} className='form-upload__label btn btn-primary btn-md'>Upload Image</label>
				</div>
				<input id={inputID} type="file" className='hidden' accept='.png,.jpg,.jpeg' onChange={this.onFileChangeHandler} />
			</div>
		);
	}

}