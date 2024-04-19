"use client";

import NavLinks from "@/components/atoms/nav-links/nav-links";
import {
	closeDrawer,
	selectStateDrawer,
} from "@/lib/Redux/Navigation/navigation-slice";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

export default function Drawer() {
	const dispatch = useDispatch();
	const stateDrawer = useSelector(selectStateDrawer);

	return (
		<div>
			<div
				className={clsx(
					"w-64 fixed top-0 left-auto bg-secondary h-screen z-50 ",
					{
						"transition-transform -translate-x-full": stateDrawer,
					},
				)}
			>
				<div className={clsx("xs:h-[92vh]")}>
					<NavLinks />
				</div>
			</div>
			<div
				onClick={() => dispatch(closeDrawer())}
				className={clsx("w-screen h-screen fixed top-0 left-0 z-30", {
					"transition-transform -translate-x-full": stateDrawer,
				})}
			/>
		</div>
	);
}
