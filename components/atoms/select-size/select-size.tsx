"use client";

import clsx from "clsx";
import { dataSizePizza } from "@/lib/data/data";
import { Filter } from "@/lib/models/models";
import { useState } from "react";

export default function SelectSize() {
	const [list, setList] = useState(dataSizePizza);

	const changeOption = (item: Filter) => {
		const updateState = list.map((itemSelect: Filter) =>
			itemSelect.id === item.id
				? { ...itemSelect, active: true }
				: { ...itemSelect, active: false },
		);

		setList(updateState);
	};

	return (
		<>
			{list.map((item) => {
				return (
					<button
						key={item.id}
						onClick={() => changeOption(item)}
						className={clsx("  mx-1 h-[50px] w-24 px-5 rounded-md", {
							"bg-primary": item.active,
							"bg-white border border-secondary": !item.active,
						})}
					>
						<p>{item.tipo}</p>
					</button>
				);
			})}
		</>
	);
}
