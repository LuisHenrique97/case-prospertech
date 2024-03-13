"use client";

import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	const decrase = () => {
		count === 0 ? setCount(0) : setCount(count - 1);
	};

	return (
		<div className="flex flex-row bg-white w-28 h-16 items-center justify-between">
			<button onClick={() => decrase()}>
				<MinusIcon className="w-6 h-6" />
			</button>
			<p className="flex items-center justify-center text-regular font-medium border w-8 h-8 rounded-md ">
				{count}
			</p>
			<button onClick={() => setCount(count + 1)}>
				<PlusIcon className="w-6 h-6" />
			</button>
		</div>
	);
}
