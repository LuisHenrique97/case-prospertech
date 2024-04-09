"use client";

import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface ICount {
	inc: () => void;
	dec: () => void;
	value: number;
}

export default function Counter(counter: ICount) {
	return (
		<div className="flex flex-row  w-28  justify-end ">
			<button onClick={counter.dec}>
				<MinusIcon className="w-6 h-6 text-tertiary" />
			</button>
			<p className="flex items-center text-tertiary justify-center text-regular font-medium border w-8 h-8 rounded-md ">
				{counter.value}
			</p>
			<button onClick={counter.inc}>
				<PlusIcon className="w-6 h-6 text-tertiary" />
			</button>
		</div>
	);
}
