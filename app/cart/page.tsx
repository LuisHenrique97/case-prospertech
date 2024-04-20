"use client";

import CardPizzaCart from "@/components/molecules/card-pizza-cart/card-pizza-card";
import { ViewPizzas, clearCart } from "@/lib/Redux/CartSlice/cart-slice";
import { finalizeOrder } from "@/lib/Redux/OrderSlice/order-slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Button, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { useState } from "react";
import { pageCurrent } from "@/lib/Redux/Navigation/navigation-slice";

export default function Cart() {
	const pizzas = useSelector(ViewPizzas);
	const router = useRouter();
	const dispatch = useDispatch();
	const [openModal, setOpenModal] = useState(false);

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
		setOpenModal(false);
		//[Temporario] Isso será inserido em um modal flutuante
		setTimeout(() => {
			dispatch(pageCurrent("Meus pedidos"));
			router.push("/purchases");
		}, 1000);
	};

	return (
		<main className="flex flex-col h-full bg-gray justify-between items-center overflow-hidden p-2">
			<div
				className="flex flex-col  justify-start items-center
			w-[100%] md:flex-row md:flex-wrap md:justify-center md:w-fit md:place-content-start
			 rounded-md overflow-y-auto gap-2 h-[65%]"
			>
				<CardPizzaCart />
			</div>
			<Modal
				open={openModal}
				onClose={() => setOpenModal(false)}
				className="opacity-95"
			>
				<ModalDialog variant="solid" className="opacity-100 bg-white">
					<ModalClose sx={{ m: 1.5, color: "#000" }} />
					<Typography
						component="h2"
						id="modal-title"
						level="h4"
						fontWeight="lg"
						mb={1}
					>
						Confirmação do pedido
					</Typography>
					<Typography textColor="text.primary" fontWeight="md">
						Verifique as informações do pedido antes de prosseguir!
					</Typography>
					<Typography textColor="text.primary" fontWeight="sm">
						Podemos finalizar o seu pedido ?
					</Typography>
					<div className="flex justify-between w-full">
						<Button
							onClick={() => setOpenModal(false)}
							variant="outlined"
							className="text-primary w-[45%] border-primary flex text-start hover:bg-offwhite active:border-offwhite"
						>
							Voltar
						</Button>
						<Button
							onClick={() => finishOrder()}
							variant="solid"
							className="bg-primary w-[45%] hover:bg-primary active:bg-secondary"
						>
							Finalizar
						</Button>
					</div>
				</ModalDialog>
			</Modal>
			<div className="bg-gray drop-shadow-md rounded-md flex flex-col justify-around h-40 w-full">
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
						onClick={() => setOpenModal(true)}
					>
						Finalizar Pedido
					</button>
				</div>
			</div>
		</main>
	);
}
