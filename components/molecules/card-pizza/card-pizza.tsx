"use client";

import Counter from "@/components/atoms/counter/counter";
import SelectSize from "@/components/atoms/select-size/select-size";
import { ViewPizzas, addPizza } from "@/lib/Redux/CartSlice/cart-slice";
import Banner from "@/lib/assets/images/pizza.jpg";
import { listPizzas } from "@/lib/data/data";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function CardPizza() {
	const dispatch = useDispatch();

	return (
		<>
			{listPizzas.map((pizza) => {
				return (
					<div
						className="bg-white shadow-md  h-[510px] w-[344px] rounded-md m-2"
						key={pizza.id}
					>
						<div className="h-48 w-full bg-offwhite rounded-t-md object-cover">
							<Image
								src={Banner}
								alt="Banner"
								className="rounded-t-md"
								style={{ objectFit: "cover", height: "194px" }} //Lebrar de documentar isso
							/>
						</div>
						<div className="m-4">
							<p className="text-big text-tertiary font-bold">{pizza.title}</p>
							<p className="text-regular text-tertiary font-regular ">
								{pizza.description}
							</p>
						</div>
						<div className="flex justify-center">
							<SelectSize />
						</div>
						<div className="flex justify-center">
							<Counter />
						</div>
						<div className="flex justify-between mx-4">
							<p className="text-big font-medium text-tertiary">
								R$ {pizza.price.toFixed(2)}
							</p>

							<button
								onClick={() => dispatch(addPizza(pizza))}
								className="bg-primary px-3 h-8 w-32 flex items-center justify-between rounded-md active:bg-secondary"
							>
								<ShoppingCartIcon width={24} height={24} />
								<p>Adicionar</p>
							</button>
						</div>
					</div>
				);
			})}
		</>
	);
}
