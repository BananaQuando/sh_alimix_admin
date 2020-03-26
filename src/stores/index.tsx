import { SidebarMenuStore } from './SidebarMenuStore';


interface Stores {
	[key: string]: any;
}

export const stores: Stores = {
	sidebarMenuStore: new SidebarMenuStore()
}