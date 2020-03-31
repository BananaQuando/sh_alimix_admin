import {
	observable,
	action,
	// computed
} from "mobx";
import { IOptionStore, IOptionValue, IOptionValueList, IOptionValueResponce } from './interfaces'
import { Config } from "../../Config";



export class OptionsStore implements IOptionStore {

	@observable OptionsValueList = {} as IOptionValueList;

	async getOptionValue(_optionValueID: number){

		if (this.OptionsValueList[_optionValueID]){
			return this.OptionsValueList[_optionValueID];
		}else{

			const responce = await fetch(`${Config.host}/option_value/${_optionValueID}`);
			const data = await responce.json();

			this.OptionsValueList[data.id] = await this.formatOptionValueData(data);

			return this.OptionsValueList[data.id];
		}
	}

	async formatOptionValueData(_optionValueResponce: IOptionValueResponce): Promise<IOptionValue> {

		return {
			id: _optionValueResponce.id,
			name: _optionValueResponce.name,
			thumb: _optionValueResponce.thumb
			
		}
	}
	
}