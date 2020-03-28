import { SidebarMenuStore } from './SidebarMenuStore';
import { CategoryStore } from './CategoryStore';
import { ContentHeaderStore } from './ContentHeaderStore';
import { InputDataStore } from './InputDataStore'
import { ProductStore } from './ProductStore';

interface Stores {
	[key: string]: any;
}

export const stores: Stores = {
	sidebarMenuStore: new SidebarMenuStore(),
	categoryStore: new CategoryStore(),
	contentHeaderStore: new ContentHeaderStore(),
	inputDataStore: new InputDataStore(),
	productStore: new ProductStore()
}