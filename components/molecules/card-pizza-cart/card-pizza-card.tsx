"use client";

import Counter from "@/components/atoms/counter/counter";
import {
	ViewPizzas,
	decrease,
	increase,
} from "@/lib/Redux/CartSlice/cart-slice";
import { useDispatch, useSelector } from "react-redux";

export default function CardPizzaCart() {
	const pizzas = useSelector(ViewPizzas);

	return (
		<>
			{pizzas.map((item) => {
				const dispatch = useDispatch();

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
									<p className="text-tertiary font-bold">
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
