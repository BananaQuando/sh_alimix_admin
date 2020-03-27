export interface ICustomEditorStore {
	getEditor: Function,
	createEditor: Function
}

export interface ICustomEditorItem {
	editorID: number,
	editorContent: string
}

export interface ICustomEditorList{
	[key: number]: ICustomEditorItem
}