"use client";

import CardPizzaCart from "@/components/molecules/card-pizza-cart/card-pizza-card";
import { ViewPizzas, clearCart } from "@/lib/Redux/CartSlice/cart-slice";
import { finalizeOrder } from "@/lib/Redux/OrderSlice/order-slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Purchase() {
	const pizzas = useSelector(ViewPizzas);
	const router = useRouter();
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
		//[Temporario] Isso será inserido em um modal flutuante
		setTimeout(() => {
			router.push("/purchases");
		}, 2000);
	};

	return (
		<main className="flex flex-col h-full bg-gray justify-between items-center overflow-hidden p-3">
			<div className="flex p-4 items-start justify-center flex-wrap overflow-y-auto gap-3 h-[65%]">
				<CardPizzaCart />
			</div>
			<div className="bg-gray  drop-shadow-md rounded-md flex flex-col justify-around h-40 w-full">
				<div className="px-2">
					<div className="flex justify-between items-center px-2 py-2 ">
						<p className="text-regular font-medium text-tertiary">
							Valor total ({QuantTotal}):
						</p>
						<p className="text-big font-medium text-tertiary">
							R$ {ValueTotal?.toFixed(2)}
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 ">
					<button
						className="w-4/6 self-center text-small hover:text-secondary text-primary font-medium"
						onClick={() => dispatch(clearCart(pizzas))}
					>
						Limpar Carrinho
					</button>
					<button
						className="bg-primary hover:bg-secondary hover:text-tertiary h-9 text-regular text-offwhite font-medium rounded-md w-5/6 self-center"
						onClick={() => finishOrder()}
					>
						Finalizar Pedido
					</button>
				</div>
			</div>
		</main>
	);
}
