"use client";

import ModalDetails from "@/components/atoms/modal-details/modal";
import { addPizza } from "@/lib/Redux/CartSlice/cart-slice";
import Banner from "@/lib/assets/images/pizza.jpg";
import { listPizzas } from "@/lib/data/data";
import { ICard } from "@/lib/models/models";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function CardPizza() {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [list, setList] = useState(listPizzas);
	const [selected, setSelected] = useState<ICard>();

	const changeOption = (item: ICard) => {
		setOpen(true);

		const updateState = list.map((itemSelect: ICard) =>
			itemSelect.id === item.id
				? { ...itemSelect, active: true }
				: { ...itemSelect, active: false },
		);

		const itemActive = list.map((select: ICard) => {
			select.id === item.id && setSelected(select);
		});

		setList(updateState);

		return itemActive;
	};

	return (
		<>
			{list.map((pizza) => {
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
									onClick={() => changeOption(pizza)}
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
						<ModalDetails
							id={selected?.id!}
							isOpen={open}
							isClose={() => setOpen(false)}
							title={selected?.title}
							description={selected?.description}
							price={selected?.price}
							active={selected?.active}
							quant={selected?.quant}
						/>
					</div>
				);
			})}
		</>
	);
}
