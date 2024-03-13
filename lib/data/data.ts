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
	},
	{
		id: 2,
		title: "Atum",
		description:
			"Molho de tomates frescos, atum, cebola, azeitonas pretas e salpicada de orégano.",
		tipo: PizzaType.Salgadas,
		price: 32.9,
	},
	{
		id: 3,
		title: "Bacon",
		description:
			"Molho de tomates frescos, mussarela, bacon e salpicada de orégano.",
		tipo: PizzaType.Salgadas,
		price: 35.9,
	},
	{
		id: 4,
		title: "Brócolis",
		description:
			"Molho de tomates frescos, brócolis ao alho e óleo, rodelas de tomates frescos, coberta com mussarela especial e salpicada de orégano",
		tipo: PizzaType.Salgadas,
		price: 40.9,
	},
	{
		id: 5,
		title: "Calabresa",
		description:
			"Molho de tomates frescos, cebola, calabresa curada, azeitonas pretas e salpicada de orégano.",
		tipo: PizzaType.Salgadas,
		price: 22.9,
	},
	{
		id: 6,
		title: "Catupiry",
		description:
			"Molho de tomates frescos, coberta com catupiry e salpicada de orégano.",
		tipo: PizzaType.Salgadas,
		price: 23.5,
	},
	{
		id: 7,
		title: "Champignon",
		description:
			"Molho de tomates frescos, champignons, coberta com mussarela e salpicada de orégano.",
		tipo: PizzaType.Salgadas,
		price: 25.9,
	},
];
