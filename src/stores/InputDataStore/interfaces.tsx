export interface IInputDataStore {
	getInputDataStore: Function,
	createInputDataStore: Function
}

export interface IInputDataItem {
	inputID: number,
	inputContent: string
}

export interface IInputDataList{
	[key: number]: IInputDataItem
}