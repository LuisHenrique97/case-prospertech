"use client";

import clsx from "clsx";
import { dataFilterPizza } from "@/lib/data/data";
import { Filter } from "@/lib/models/models";
import { useState } from "react";

export default function FilterPizzas() {
	//Grupo de botões que irá funcionar no mesmo formato no nav-links
	//As suas propriedades de tamanho poderão se alteradas por design conditional
	//Será usado para o filto das pizza e o filtro dos tamanhos

	const [list, setList] = useState(dataFilterPizza);

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
						className={clsx(
							"h-[50px] px-5 [&:nth-child(2)]:rounded-none first:rounded-l-md last:rounded-r-md",
							"first:border-r-0 last:border-l-0",
							{
								"bg-primary": item.active,
								"bg-white border border-primary": !item.active,
							},
						)}
					>
						<p>{item.tipo}</p>
					</button>
				);
			})}
		</>
	);
}
