import { Modal, ModalClose, ModalDialog } from "@mui/joy";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Banner from "@/lib/assets/images/pizza.jpg";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
	ViewPizzas,
	addPizza,
	increase,
} from "@/lib/Redux/CartSlice/cart-slice";
import { ICart } from "@/lib/models/models";

interface IModal {
	id: number;
	isOpen: boolean;
	isClose: () => void;
	title?: string;
	description?: string;
	price?: number;
	active?: boolean;
	quant?: number;
	url: string;
}

export default function ModalDetails(props: IModal) {
	const dispatch = useDispatch();
	const pizzas = useSelector(ViewPizzas);

	const imageLoader = ({ src, width, quality }: any) => {
		return `https://cdn.pixabay.com/${src}?w=${width}&q=${quality || 75}`;
	};

	const addCart = (newItem: ICart) => {
		const hasItem = pizzas.find((item) => item?.id === newItem.id);

		if (hasItem) {
			dispatch(increase(hasItem));
		} else {
			dispatch(addPizza(newItem));
		}
	};

	return (
		<>
			<Modal
				open={props.isOpen}
				onClose={props.isClose}
				className="opacity-50"
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<ModalDialog
					sx={{
						width: "60%",
						height: "450px",
					}}
				>
					<ModalClose
						color="neutral"
						className="bg-primary text-white"
						variant="solid"
						sx={{ m: 3 }}
					/>

					<div className="flex flex-col justify-between h-[100%]">
						<div>
							<div className="w-[100%] h-[150px] bg-tertiary rounded-md ">
								<Image
									loader={imageLoader}
									src={props.url}
									width={100}
									height={30}
									alt="Banner"
									className="rounded-md"
									style={{
										objectFit: "cover",
										width: "100%",
										height: "100%",
									}}
								/>
							</div>
							<div className="my-2 ">
								<p className="text-big text-tertiary font-bold">
									{props.title}
								</p>
								<p className="text-regular text-tertiary font-sans ">
									{props.description}
								</p>
							</div>
						</div>
						<p className="text-smaller mt-4 text-tertiary font-sans ">
							Está pizza possuí tamanho unico de{" "}
							<>
								<strong>8 fatias</strong>
							</>
						</p>

						<div className="flex justify-between">
							<p className="text-big font-medium text-tertiary">
								R$ {props.price?.toFixed(2)}
							</p>

							<button
								onClick={() =>
									addCart({
										id: props.id,
										title: props.title!,
										description: props.description!,
										price: props.price!,
										quant: props.quant!,
										active: props.active!,
										url: props.url,
									})
								}
								className={clsx(
									"bg-primary px-3 gap-2  h-8 w-fit flex items-center justify-between hover:bg-secondary active:bg-primary rounded-md",
								)}
							>
								<ShoppingCartIcon width={24} height={24} color="#fff" />
								<p className="text-white font-medium">Adicionar</p>
							</button>
						</div>
					</div>
				</ModalDialog>
			</Modal>
		</>
	);
}
