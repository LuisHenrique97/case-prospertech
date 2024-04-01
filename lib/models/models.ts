import { PizzaType, SizeType } from "./enum";

export interface Filter {
	id: number;
	tipo: SizeType | PizzaType;
	active: boolean;
}

export interface ICard {
	id: number;
	title: string;
	description: string;
	price: number;
	tipo?: PizzaType;
}

export interface ICart extends ICard {
	size?: SizeType;
	quant?: number;
	totalValue?: number;
}

export interface IOrder {
	id: number;
	valueTotal: number;
	quantTotal: number;
	itemsOrder: [ICard];
}
