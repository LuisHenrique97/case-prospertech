"use client";

import FilterPizzas from "@/components/atoms/filter-pizzas/filter-pizzas";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import Drawer from "../drawer/drawer";

export default function Header() {
	//A navegação do drawer navigation será feita atravéz
	//de uma manipulação de estado global do componente

	// A função de abrir e fechar o drawer será implentada dentro do componente
	// E a implementação de layout deve ser feito no componente

	return (
		<div className="bg-secondary md:ml-8 h-32 sm:h-36">
			<div className="flex flex-row md:items-baseline justify-between mr-6">
				<div>
					<div className="md:hidden fixed">
						<Drawer />
					</div>
					<div className="md:visible md:mt-4 mt-12 ml-6">
						<p className="text-biggest font-bold text-tertiary">Cardápio</p>
						<p className="text-regular font-medium text-tertiary">
							Aqui você pode ver todas as nossas pizzas
						</p>
					</div>
				</div>

				<Link href={"/cart"} className=" items-center mt-4 ">
					<ShoppingCartIcon
						width={24}
						height={24}
						className="text-tertiary active:text-primary"
					/>
				</Link>
			</div>

			{/* <input
				type="text"
				className="h-11 mt-6 w-3/5 pl-4 bg-gray 
        rounded-md focus:outline-none focus:ring-2
        focus:ring-secondary text-tertiary"
				placeholder="Insira o nome da pizza"
			/>
			<button className="h-12 ml-6 rounded-md active:bg-secondary text-white bg-primary w-32">
				<p>Buscar</p>
			</button>
			<div className="mt-4">
				<FilterPizzas />
			</div> */}
		</div>
	);
}
