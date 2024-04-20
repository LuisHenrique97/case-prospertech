"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import Drawer from "../drawer/drawer";
import { useDispatch, useSelector } from "react-redux";
import {
	namePage,
	openDrawer,
	pageCurrent,
} from "@/lib/Redux/Navigation/navigation-slice";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Badge } from "@mui/joy";
import { ViewPizzas } from "@/lib/Redux/CartSlice/cart-slice";

export default function Header() {
	const dispatch = useDispatch();
	const currentPage = useSelector(namePage);
	const pizzas = useSelector(ViewPizzas);

	const pathname = usePathname();

	const QuantItemsCart = pizzas
		.map((a) => a?.quant)
		.reduce((acumulador, atual) => acumulador! + atual!, 0);

	return (
		<div
			className={clsx("bg-offwhite h-max drop-shadow-md", {
				hidden: pathname === "/auth/login" || pathname === "/auth/register",
			})}
		>
			<div className="flex flex-row justify-between items-center py-4 px-6">
				<Bars3Icon
					width={24}
					height={24}
					onClick={() => dispatch(openDrawer())}
					className="text-tertiary  active:text-primary"
				/>

				<div className="">
					<p className="text-big font-bold text-tertiary">{currentPage}</p>
				</div>
				<Link
					href={"/cart"}
					className=" items-center"
					onClick={() => dispatch(pageCurrent("Carrinho"))}
				>
					<Badge badgeContent={QuantItemsCart} showZero={false} color="danger">
						<ShoppingCartIcon
							width={24}
							height={24}
							className="text-tertiary active:text-primary"
						/>
					</Badge>
				</Link>
			</div>

			<Drawer />
		</div>
	);
}
