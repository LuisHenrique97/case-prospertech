"use client";

import FilterPizzas from "@/components/atoms/filter-pizzas/filter-pizzas";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import Drawer from "../drawer/drawer";
import { useDispatch } from "react-redux";
import { openDrawer } from "@/lib/Redux/Navigation/navigation-slice";

export default function Header() {
	const dispatch = useDispatch();
	//A navegação do drawer navigation será feita atravéz
	//de uma manipulação de estado global do componente

	// A função de abrir e fechar o drawer será implentada dentro do componente
	// E a implementação de layout deve ser feito no componente

	return (
		<div className="bg-offwhite h-max ">
			<div className="flex flex-row justify-between items-center py-4 px-6">
				<Bars3Icon
					width={24}
					height={24}
					onClick={() => dispatch(openDrawer())}
					className="text-tertiary  active:text-primary"
				/>

				<div className="">
					<p className="text-big font-bold text-tertiary">Cardápio</p>
				</div>
				<Link href={"/cart"} className=" items-center ">
					<ShoppingCartIcon
						width={24}
						height={24}
						className="text-tertiary active:text-primary"
					/>
				</Link>
			</div>

			<Drawer />
		</div>
	);
}
