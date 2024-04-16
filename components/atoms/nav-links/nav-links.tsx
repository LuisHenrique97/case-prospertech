"use client";

import Link from "next/link";
import {
	HomeIcon,
	ShoppingBagIcon,
	ShoppingCartIcon,
	UserIcon,
	ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { closeDrawer } from "@/lib/Redux/Navigation/navigation-slice";

const links = [
	{ name: "Home", href: "/", icon: HomeIcon },
	{
		name: "Carrinho",
		href: "/cart",
		icon: ShoppingCartIcon,
	},
	{ name: "Meus Pedidos", href: "/purchases", icon: ShoppingBagIcon },
	{ name: "Meus Conta", href: "/account", icon: UserIcon },
];

//O use-cliente permite o uso icone como jsx

export default function NavLinks() {
	const dispatch = useDispatch();

	return (
		<div className="h-full justify-between flex flex-col ">
			<div>
				{links.map((link) => {
					const LinkIcon = link.icon;
					return (
						<Link
							onClick={() => dispatch(closeDrawer())}
							href={link.href}
							key={link.name}
							className=" flex grow my-2 ml-3 items-center 
						rounded-md text-tertiary font-medium text-regular
						hover:bg-secondary hover:mr-4 h-[48px] p-3"
						>
							<LinkIcon width={24} height={24} />
							<p className="px-4">{link.name}</p>
						</Link>
					);
				})}
			</div>
			<div>
				<Link
					href={"/auth/register"}
					className=" flex grow my-2 ml-4 mb-4 items-center 
						rounded-md text-tertiary font-medium text-regular
						hover:bg-secondary hover:mr-4 h-[48px] p-3"
				>
					<ArrowLeftStartOnRectangleIcon width={24} height={24} />
					<p className="px-4">Sair</p>
				</Link>
			</div>
		</div>
	);
}
