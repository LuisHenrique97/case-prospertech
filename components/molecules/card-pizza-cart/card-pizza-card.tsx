"use client";

import Counter from "@/components/atoms/counter/counter";

import { ViewPizzas } from "@/lib/Redux/CartSlice/cart-slice";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CardPizzaCart() {
	const pizzas = useSelector(ViewPizzas);

	console.log(pizzas);
	return (
		<>
			{pizzas.map((item) => {
				const [count, setCount] = useState(item?.quant);

				const decrase = () => {
					count === 0 ? setCount(0) : setCount(count! - 1);
				};

				return (
					<div className="w-[344px] h-[148px] bg-gray p-4 flex flex-col justify-center rounded-md">
						<div className="flex">
							<div className="w-[100px] h-[100px] bg-tertiary mr-4 rounded-sm"></div>
							<div className="h-full flex flex-col justify-around -space-y-1">
								<div>
									<p className="text-tertiary text-big font-medium leading-none">
										{item?.title}
									</p>
								</div>
								<div className="flex justify-between items-center">
									<p className="text-tertiary font-bold">R$ 35,00</p>
									<Counter
										dec={() => decrase()}
										inc={() => setCount(count! + 1)}
										value={count!}
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
