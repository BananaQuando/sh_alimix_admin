export interface IOptionStore {
	getOptionValue: Function,
}

export interface IOptionValueResponce {
	id: number,
	name: string,
	thumb: string
}

export interface IOptionValue {
	id: number,
	name: string,
	thumb: string
}

export interface IOptionValueList {
	[key: number]: IOptionValue
}

