import { SidebarMenuStore } from './SidebarMenuStore';
import { CategoryStore } from './CategoryStore';
import { ContentHeaderStore } from './ContentHeaderStore';
import { CustomEditorStore } from './CustomEditorStore'

interface Stores {
	[key: string]: any;
}

export const stores: Stores = {
	sidebarMenuStore: new SidebarMenuStore(),
	categoryStore: new CategoryStore(),
	contentHeaderStore: new ContentHeaderStore(),
	customEditorStore: new CustomEditorStore()
}