"use client";

import Counter from "@/components/atoms/counter/counter";
import {
	ViewPizzas,
	decrease,
	increase,
} from "@/lib/Redux/CartSlice/cart-slice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function CardPizzaCart() {
	const pizzas = useSelector(ViewPizzas);

	const imageLoader = ({ src, width, quality }: any) => {
		return `https://cdn.pixabay.com/${src}?w=${width}&q=${quality || 75}`;
	};

	return (
		<>
			{pizzas.map((item) => {
				const dispatch = useDispatch();

				return (
					<div
						key={item?.id}
						className="w-[344px] h-[148px] shadow-md bg-white p-4 flex flex-col justify-center rounded-md"
					>
						<div className="flex justify-between gap-4">
							<div className="w-[100px] h-[100px] bg-tertiary rounded-md">
								<Image
									loader={imageLoader}
									src={item?.url!}
									width={200}
									height={100}
									alt="Banner"
									className="rounded-md"
									style={{ objectFit: "cover", height: "100%" }} //Lebrar de documentar isso
								/>
							</div>
							<div className="h-full w-4/6 flex flex-col  justify-between ">
								<div>
									<p className="text-big text-tertiary font-bold ">
										{item?.title}
									</p>
								</div>
								<div className="flex justify-between items-center">
									<p className="text-tertiary font-medium ">
										R$ {item?.price.toFixed(2)}
									</p>
									<Counter
										dec={() => dispatch(decrease(item))}
										inc={() => dispatch(increase(item))}
										value={item?.quant!}
									/>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}
