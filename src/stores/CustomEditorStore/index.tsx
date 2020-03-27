import {
	observable,
	action,
	// computed
} from "mobx";
import { ICustomEditorItem, ICustomEditorStore, ICustomEditorList } from './interfaces'



export class CustomEditorStore implements ICustomEditorStore {

	@observable editorsList = {} as ICustomEditorList;

	@action getEditor(editorID: number, editorContent: string = '') {

		if(this.editorsList[editorID]){
			
			return this.editorsList[editorID];
		}else{

			this.editorsList[editorID] = this.createEditor(editorID, editorContent);
			return this.editorsList[editorID];
		}
	}

	@action createEditor(editorID: number, editorContent: string):ICustomEditorItem {
		
		return {
			editorID,
			editorContent
		}
	}

}