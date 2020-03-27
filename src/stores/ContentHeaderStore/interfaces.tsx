export interface IContentHeaderStore {
	headingTitle: string,
	breadcrumbs: {
		title: string,
		link: string,
		isCurrent: boolean
	}[],
	setTitie: Function,
	setBreadcrumbs: Function
}