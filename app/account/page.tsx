"use client";

import { UserAuth, logout } from "@/lib/Redux/AuthSlice/auth-slice";
import { Avatar, Button, Card, Divider, Typography } from "@mui/joy";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Account() {
	const auth = useSelector(UserAuth);
	const router = useRouter();
	const dispatch = useDispatch();

	return (
		<main className="card">
			{auth.isAuth ? (
				<Card variant="solid">
					<div className="flex gap-2 items-center">
						<Avatar size="lg" />
						<div>
							<Typography level="title-lg" sx={{ color: "#fff" }}>
								{auth.user.name}
							</Typography>

							<Typography sx={{ color: "#fff" }}>{auth.user.email}</Typography>
						</div>
					</div>

					<Divider
						inset="context"
						sx={{
							backgroundColor: "#c8c8ce",
							width: "98%",
							display: "flex",
							alignSelf: "center",
						}}
					/>

					<Button
						onClick={() => dispatch(logout())}
						endDecorator={
							<ChevronRightIcon color="#fff" width={24} height={24} />
						}
						color="danger"
					>
						Sair
					</Button>
				</Card>
			) : (
				<Card variant="solid" sx={{ width: "350px" }}>
					<Typography
						level="title-lg"
						sx={{ color: "#fff", textAlign: "center" }}
					>
						Você precisa estar logado para ver as suas informações
					</Typography>
					<Divider
						inset="context"
						sx={{
							backgroundColor: "#c8c8ce",
							width: "98%",
							display: "flex",
							alignSelf: "center",
						}}
					/>
					<Button
						onClick={() => router.push("/auth/login")}
						endDecorator={
							<ChevronRightIcon color="#fff" width={24} height={24} />
						}
						color="primary"
					>
						Ir para o login
					</Button>
				</Card>
			)}
		</main>
	);
}
