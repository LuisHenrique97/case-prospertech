"use client";

import Counter from "@/components/atoms/counter/counter";
import Banner from "@/lib/assets/images/pizza.jpg";
import {
	ViewPizzas,
	decrease,
	increase,
} from "@/lib/Redux/CartSlice/cart-slice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function CardPizzaCart() {
	const pizzas = useSelector(ViewPizzas);

	return (
		<>
			{pizzas.map((item) => {
				const dispatch = useDispatch();

				return (
					<div
						key={item?.id}
						className="w-[344px] h-[148px] shadow-md bg-offwhite p-4 flex flex-col justify-center rounded-md"
					>
						<div className="flex justify-between gap-4">
							<div className="w-[100px] h-[100px] bg-tertiary rounded-md">
								<Image
									src={Banner}
									alt="Banner"
									className="rounded-md"
									style={{ objectFit: "cover", height: "96px" }} //Lebrar de documentar isso
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
