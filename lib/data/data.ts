import { PizzaType, SizeType } from "../models/enum";
import { Filter, ICard } from "../models/models";

export const dataFilterPizza: Array<Filter> = [
	{ id: 1, tipo: PizzaType.Todas, active: true },
	{ id: 2, tipo: PizzaType.Doces, active: false },
	{ id: 3, tipo: PizzaType.Salgadas, active: false },
];

export const dataSizePizza: Array<Filter> = [
	{ id: 1, tipo: SizeType.P, active: false },
	{ id: 2, tipo: SizeType.M, active: false },
	{ id: 3, tipo: SizeType.G, active: false },
];

export const listPizzas: Array<ICard> = [
	{
		id: 1,
		title: "Alho",
		description: "Molho de tomates frescos, mussarela, parmesão e alho frito.",
		tipo: PizzaType.Salgadas,
		price: 20.0,
		active: false,
		quant: 0,
		url: "photo/2016/11/29/13/02/cheese-1869708_640.jpg",
	},
	{
		id: 2,
		title: "Atum",
		description:
			"Molho de tomates frescos, atum, cebola, azeitonas pretas e salpicada de orégano.",
		tipo: PizzaType.Salgadas,
		price: 32.9,
		active: false,
		quant: 0,
		url: "photo/2017/09/30/15/10/plate-2802332_640.jpg",
	},
	{
		id: 3,
		title: "Bacon",
		description:
			"Molho de tomates frescos, mussarela, bacon e salpicada de orégano.",
		tipo: PizzaType.Salgadas,
		price: 35.9,
		active: false,
		quant: 0,
		url: "photo/2017/02/15/10/57/pizza-2068272_640.jpg",
	},
	{
		id: 4,
		title: "Brócolis",
		description:
			"Molho de tomates frescos, brócolis ao alho e óleo, rodelas de tomates frescos, coberta com mussarela especial e salpicada de orégano",
		tipo: PizzaType.Salgadas,
		price: 40.9,
		active: false,
		quant: 0,
		url: "photo/2014/05/18/11/25/pizza-346985_640.jpg",
	},
	{
		id: 5,
		title: "Calabresa",
		description:
			"Molho de tomates frescos, cebola, calabresa curada, azeitonas pretas e salpicada de orégano.",
		tipo: PizzaType.Salgadas,
		price: 22.9,
		active: false,
		quant: 0,
		url: "photo/2018/12/12/13/03/pizza-3870778_640.jpg",
	},
	{
		id: 6,
		title: "Catupiry",
		description:
			"Molho de tomates frescos, coberta com catupiry e salpicada de orégano.",
		tipo: PizzaType.Salgadas,
		price: 23.5,
		active: false,
		quant: 0,
		url: "photo/2016/04/09/09/22/pizza-1317699_640.jpg",
	},
	{
		id: 7,
		title: "Champignon",
		description:
			"Molho de tomates frescos, champignons, coberta com mussarela e salpicada de orégano.",
		tipo: PizzaType.Salgadas,
		price: 25.9,
		active: false,
		quant: 0,
		url: "photo/2014/07/08/12/34/pizza-386717_640.jpg",
	},
];
