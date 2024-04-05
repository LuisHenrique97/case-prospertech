"use client";

import { addPizza } from "@/lib/Redux/CartSlice/cart-slice";
import Banner from "@/lib/assets/images/pizza.jpg";
import { listPizzas } from "@/lib/data/data";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function CardPizza() {
	const dispatch = useDispatch();

	return (
		<>
			{listPizzas.map((pizza) => {
				return (
					<div
						className="bg-offwhite flex flex-col justify-between shadow-md h-[148px] w-[344px] rounded-md m-1 p-2"
						key={pizza.id}
					>
						<div className="flex justify-between ">
							<div className="h-24 w-24 bg-tertiary rounded-md object-cover">
								<Image
									src={Banner}
									alt="Banner"
									className="rounded-md"
									style={{ objectFit: "cover", height: "96px" }} //Lebrar de documentar isso
								/>
							</div>
							<div className="w-4/6 h-20">
								<p className="text-big text-tertiary font-bold">
									{pizza.title}
								</p>
								<p
									className="text-small overflow-hidden text-ellipsis line-clamp-2 
								text-tertiary font-sans "
								>
									{pizza.description}
								</p>
								<button
									onClick={() => {}}
									className="flex self-start font-medium "
								>
									<p>Ver mais</p>
								</button>
							</div>
						</div>

						<div className="flex justify-between align-bottom items-end mx-1 ">
							<p className="text-big font-medium text-tertiary">
								R$ {pizza.price.toFixed(2)}
							</p>

							<button
								onClick={() => dispatch(addPizza({ ...pizza }))}
								className="bg-primary px-3 h-8 w-fit flex items-center justify-between rounded-md active:bg-secondary"
							>
								<ShoppingCartIcon width={24} height={24} />
							</button>
						</div>
					</div>
				);
			})}
		</>
	);
}
