"use client";

import { decrement, increment, selectCount } from "@/lib/Redux/counter-slice";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();

	return (
		<div className="flex flex-row bg-white w-28 h-16 items-center justify-between">
			<button onClick={() => dispatch(decrement())}>
				<MinusIcon className="w-6 h-6" />
			</button>
			<p className="flex items-center justify-center text-regular font-medium border w-8 h-8 rounded-md ">
				{count}
			</p>
			<button onClick={() => dispatch(increment())}>
				<PlusIcon className="w-6 h-6" />
			</button>
		</div>
	);
}
