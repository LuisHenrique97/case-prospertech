import { ICart } from "./../models/models";

export const Validate = (value: ICart) => {
	if (value.quant === 0) {
		return { message: "Selecione a quantidade de pizzas que deseja" };
	} else if (value.size === (null || undefined)) {
		return { message: "Selecione o tamanho de pizza que deseja" };
	} else {
		return { message: "Pizza adicionada ao carrinho!" };
	}
};
