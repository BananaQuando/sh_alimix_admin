import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { IInputDataStore, IInputDataItem } from '../../stores/InputDataStore/interfaces';

interface Props {
	inputID: string | number,
	content?: string,
	title?: string,
	inputDataStore?: IInputDataStore,
	inputDataItem?: IInputDataItem
}

@inject('inputDataStore')
@observer
export default class CustomTextInput extends React.Component <Props> {

	@observable editorState = EditorState.createEmpty();
	@observable inputDataItem = {} as IInputDataItem

	@action onEditorStateChange = (_editorState: any) => {

		this.editorState = _editorState;
		this.inputDataItem.inputContent = this.convertToHtml(_editorState);
	};

	@action componentDidMount(){

		const { inputID } = this.props;

		this.inputDataItem = this.props.inputDataStore!.getInputDataStore(inputID, this.props.content);
		
		this.editorState = this.convertToState(this.inputDataItem.inputContent);
	}

	@action convertToHtml(state: any){

		const rawContentState = convertToRaw(state.getCurrentContent());
 
		return draftToHtml(rawContentState);
	}

	@action convertToState(content: any){

		const contentBlock = htmlToDraft(content);
		const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);

		return EditorState.createWithContent(contentState);
	}

	render (){

		return (
			<>
				{ this.props.title ? <b>{this.props.title}</b> : ''}
				<Editor editorState={this.editorState} onEditorStateChange={this.onEditorStateChange} />
			</>
		);
	}

}