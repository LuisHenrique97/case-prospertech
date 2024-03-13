"use client";

import NavLinks from "@/components/atoms/nav-links/nav-links";
import NavLogo from "@/components/atoms/nav-logo/nav-logo";
import clsx from "clsx";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Drawer() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div
			className={clsx("w-64 h-screen flex-none pt-4 md:w-64 bg-offwhite", {
				"w-max bg-secondary h-max": isOpen,
			})}
		>
			<div className="md:hidden ml-6 flex w-max">
				<button onClick={() => setIsOpen(!isOpen)} className="flex">
					<Bars3Icon
						width={24}
						height={24}
						className="text-tertiary  active:text-primary"
					/>
					<p
						className={clsx("px-4 font-medium text-tertiary", {
							hidden: isOpen,
						})}
					>
						Menu
					</p>
				</button>
			</div>
			<div className={clsx("xs:h-[92vh]", { hidden: isOpen })}>
				{/* <NavLogo /> */}
				<NavLinks />
			</div>
		</div>
	);
}
