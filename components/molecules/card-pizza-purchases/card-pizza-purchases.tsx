"use client";

import { ViewOrders } from "@/lib/Redux/OrderSlice/order-slice";
import Banner from "@/lib/assets/images/pizza.jpg";

import Image from "next/image";
import { useSelector } from "react-redux";

export default function CardPizzaPurchases() {
	const orders = useSelector(ViewOrders);

	const imageLoader = ({ src, width, quality }: any) => {
		return `https://cdn.pixabay.com/${src}?w=${width}&q=${quality || 75}`;
	};

	return (
		<div className="grid gap-4 grid-cols-1">
			{orders.map((pizza) => (
				<div className="bg-gray drop-shadow-md p-1 rounded-md h-max ">
					{pizza?.itemsOrder.map((items) => {
						return (
							<div>
								<div
									className="bg-white flex flex-col justify-between shadow-sm h-[148px] w-[344px] rounded-md m-1 p-2"
									key={items?.id}
								>
									<div className="flex justify-between ">
										<div className="h-24 w-24 bg-tertiary rounded-md object-cover">
											<Image
												loader={imageLoader}
												src={items.url!}
												width={200}
												height={100}
												alt="Banner"
												className="rounded-md"
												style={{ objectFit: "cover", height: "96px" }} //Lebrar de documentar isso
											/>
										</div>
										<div className="w-4/6 h-20">
											<div className="flex items-center gap-1">
												<p className="text-big text-tertiary font-bold">
													{items?.title}
												</p>
												<p>({items.quant})</p>
											</div>
											<p
												className="text-small overflow-hidden text-ellipsis line-clamp-2 
								text-tertiary font-sans "
											>
												{items?.description}
											</p>
											<button
												onClick={() => {}}
												className="flex self-start font-medium "
											>
												<p>Ver mais</p>
											</button>
										</div>
									</div>

									<div className="flex justify-start align-bottom items-center mx-1 ">
										<p className="text-big font-medium text-tertiary">
											R$ {items.price.toFixed(2)}
										</p>
									</div>
								</div>
							</div>
						);
					})}
					<div className="flex justify-between items-center px-3 py-2">
						<p className="text-regular font-medium text-tertiary">
							Valor total ({pizza?.quantTotal}):
						</p>
						<p className="text-big font-medium text-tertiary">
							R$ {pizza?.valueTotal?.toFixed(2)}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
