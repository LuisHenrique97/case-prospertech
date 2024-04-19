"use client";

import { UserAuth, logout } from "@/lib/Redux/AuthSlice/auth-slice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function Account() {
	const auth = useSelector(UserAuth);
	const router = useRouter();
	const dispatch = useDispatch();

	return (
		<main className="card">
			<div>Minha Conta</div>
			{auth.isAuth && (
				<div>
					<p>{auth.user.name}</p>
					<p>{auth.user.email}</p>

					<button
						onClick={() => dispatch(logout()) && router.push("/auth/login")}
						className="bg-primary"
					>
						Sair
					</button>
				</div>
			)}
		</main>
	);
}
