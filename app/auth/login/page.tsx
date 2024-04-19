"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import Banner from "@/lib/assets/images/signIn.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { UserRegister } from "@/lib/Redux/UserSlice/user-slice";
import { login } from "@/lib/Redux/AuthSlice/auth-slice";

type Inputs = {
	email: string;
	password: string;
};

export default function Login() {
	const dispatch = useDispatch();
	const router = useRouter();

	const createAccount = useSelector(UserRegister);

	const {
		register,

		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		createAccount.filter((item) => {
			const email = item?.email === data.email;
			const password = item?.password === data.password;
			if (email && password) {
				dispatch(login({ ...data, id: item.id, name: item.name }));
				router.push("/account");
			} else {
				console.log("Diferentes");
			}
		});
	};

	return (
		<main className="card">
			<div className="bg-white w-screen h-full  flex flex-col items-center justify-between">
				<div className="flex self-start">
					<button
						className="flex self-start p-4 w-max"
						onClick={() => {
							router.back(), console.log("1");
						}}
					>
						<ArrowLeftIcon
							width={24}
							height={24}
							className="mr-2 text-tertiary"
						/>
						<p className="text-tertiary font-medium ">Voltar</p>
					</button>
				</div>
				<div className="h-full flex flex-col justify-center">
					<div className="flex self-center">
						<Image src={Banner} alt="Banner" width={220} />
					</div>
					<div className="flex flex-col items-center mb-8 px-2">
						<p className="text-big font-bold text-tertiary">Seja Bem Vindo</p>
						<p className="text-small font-regular text-center text-tertiary">
							Faça o login para acessar a sua conta
						</p>
					</div>
					<form>
						<div className="mt-4 flex flex-col gap-4 items-center p-2">
							<input
								defaultValue=""
								{...register("email", { required: true })}
								aria-invalid={errors.email ? "true" : "false"}
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								className="h-12 w-72 rounded-lg  bg-gray py-1.5 pl-4 
						 focus:ring-primary focus:ring-2 ring-0
						outline-none ring-inset shadow-md"
							/>
							{errors.email?.type === "required" && (
								<p className="self-start text-small ml-3 -mt-3 text-red">
									Email é obrigatório
								</p>
							)}
							<input
								defaultValue=""
								{...register("password", { required: true })}
								aria-invalid={errors.password ? "true" : "false"}
								type="password"
								name="password"
								id="password"
								placeholder="Senha"
								className="h-12 w-72 rounded-lg  bg-gray py-1.5 pl-4 
						 focus:ring-primary focus:ring-2 ring-0
						outline-none ring-inset ring-tertiary shadow-md"
							/>
							{errors.password?.type === "required" && (
								<p className="self-start text-small ml-3 -mt-3 text-red">
									Senha é obrigatório
								</p>
							)}
						</div>
					</form>
					<div className="flex  justify-center">
						<button
							onClick={handleSubmit(onSubmit)}
							className="bg-primary drop-shadow-md min-w-16 
							h-9 p-4 w-72 mt-16 flex rounded-md justify-center 
							items-center hover:bg-secondary"
						>
							<p className="text-white font-medium ">Avançar</p>
						</button>
					</div>
					<div className="flex gap-2 mt-4">
						<p className="text-small">Se ainda não possui uma conta </p>
						<button onClick={() => router.push("/auth/register")}>
							<p className="text-small text-primary">clique aqui</p>
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
