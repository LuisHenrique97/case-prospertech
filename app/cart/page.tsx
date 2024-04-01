"use client";

import CardPizzaCart from "@/components/molecules/card-pizza-cart/card-pizza-card";
import { ViewPizzas, clearCart } from "@/lib/Redux/CartSlice/cart-slice";
import { finalizeOrder } from "@/lib/Redux/OrderSlice/order-slice";
import { useDispatch, useSelector } from "react-redux";

export default function Purchase() {
	const pizzas = useSelector(ViewPizzas);
	const dispatch = useDispatch();

	const QuantTotal = pizzas
		.map((a) => a?.quant)
		.reduce((acumulador, atual) => acumulador! + atual!, 0);

	const ValueTotal = pizzas
		.map((a) => a?.price! * a?.quant!)
		.reduce((acumulador, atual) => acumulador! + atual!, 0);

	const finishOrder = () => {
		dispatch(
			finalizeOrder({
				valueTotal: ValueTotal,
				quantTotal: QuantTotal,
				itemsOrder: pizzas,
			}),
		);
		dispatch(clearCart(pizzas));
	};

	return (
		<main className="card">
			<div className="space-y-6">
				<CardPizzaCart />
			</div>
			<div>
				<p>Quantidade: {QuantTotal}</p>
				<p>Total: R$ {ValueTotal?.toFixed(2)}</p>
			</div>
			<div>
				<button onClick={() => finishOrder()}>Finalizar Pedido</button>
			</div>
			<div>
				<button onClick={() => dispatch(clearCart(pizzas))}>
					Limpar Carrinho
				</button>
			</div>
		</main>
	);
}
