import {
	observable,
	action,
	// computed
} from "mobx";
import { IInputDataItem, IInputDataList, IInputDataStore } from './interfaces'



export class InputDataStore implements IInputDataStore {

	@observable inputsList = {} as IInputDataList;

	@action getInputDataStore(inputID: number, inputContent: string = '') {

		if(this.inputsList[inputID]){
			
			return this.inputsList[inputID];
		}else{

			this.inputsList[inputID] = this.createInputDataStore(inputID, inputContent);
			return this.inputsList[inputID];
		}
	}

	@action updateInputData(inputID: number, inputContent: string = '') {

		if(this.inputsList[inputID]){
			
			this.inputsList[inputID].inputContent = inputContent;

			return this.inputsList[inputID];
		}else{

			this.inputsList[inputID] = this.createInputDataStore(inputID, inputContent);
			return this.inputsList[inputID];
		}
	}

	@action createInputDataStore(inputID: number, inputContent: string):IInputDataItem {
		
		return {
			inputID,
			inputContent
		}
	}

}