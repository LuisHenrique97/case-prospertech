"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import Banner from "@/lib/assets/images/signUp.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { registerUser } from "@/lib/Redux/UserSlice/user-slice";
import { login } from "@/lib/Redux/AuthSlice/auth-slice";
import { useRouter } from "next/navigation";

type Inputs = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export default function Register() {
	const dispatch = useDispatch();
	const router = useRouter();

	const {
		register,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		if (data.password === data.confirmPassword) {
			console.log("Senha Iguais");
			dispatch(
				registerUser({
					...data,
					id: Math.floor(Math.random() * (1000 - 1) + 1),
				}),
			);
			dispatch(
				login({ ...data, id: Math.floor(Math.random() * (1000 - 1) + 1) }),
			);
			router.push("/account");
		} else {
			return setError("confirmPassword", {
				message: "As senhas não conferem",
			});
		}
	};

	return (
		<main className="card">
			<div className="bg-white w-screen h-full  flex flex-col items-center justify-between">
				<div className="flex self-start">
					<button
						className="flex self-start p-4 w-max"
						onClick={() => router.back()}
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
					<div className="flex self-center ">
						<Image src={Banner} alt="Banner" width={240} />
					</div>
					<div className="flex flex-col items-center mb-8 px-2">
						<p className="text-big font-bold text-tertiary">Vamos começar</p>
						<p className="text-small font-regular text-center text-tertiary">
							Crie uma conta para fazer os seus pedidos no pizza tech
						</p>
					</div>
					<form>
						<div className="mt-4 flex flex-col gap-4 items-center p-2">
							<input
								defaultValue=""
								{...register("name", { required: true })}
								aria-invalid={errors.name ? "true" : "false"}
								type="text"
								name="name"
								id="name"
								placeholder="Nome"
								className="h-12 w-72 rounded-lg  bg-gray py-1.5 pl-4 
						 focus:ring-primary focus:ring-2 ring-0
						outline-none ring-inset ring-tertiary shadow-md"
							/>
							{errors.name?.type === "required" && (
								<p className="self-start text-small ml-16 -mt-3 text-red">
									Nome é obrigatório
								</p>
							)}
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
						outline-none ring-inset ring-tertiary shadow-md"
							/>
							{errors.email?.type === "required" && (
								<p className="self-start text-small ml-16 -mt-3 text-red">
									Email é obrigatório
								</p>
							)}
							<input
								defaultValue=""
								{...register("password", { required: true })}
								aria-invalid={errors.password ? true : false}
								type="password"
								name="password"
								id="password"
								placeholder="Senha"
								className="h-12 w-72 rounded-lg  bg-gray py-1.5 pl-4 
						 focus:ring-primary focus:ring-2 ring-0
						outline-none ring-inset ring-tertiary shadow-md"
							/>
							{errors.password?.type === "required" && (
								<p className="self-start text-small ml-16 -mt-3 text-red">
									Senha é obrigatório
								</p>
							)}
							<input
								defaultValue=""
								{...register("confirmPassword", { required: true })}
								aria-invalid={errors.confirmPassword ? true : false}
								type="password"
								name="confirmPassword"
								id="confirmPassword"
								placeholder="Confirmar Senha"
								className="h-12 w-72 rounded-lg  bg-gray py-1.5 pl-4 
						 focus:ring-primary focus:ring-2 ring-0
						outline-none ring-inset ring-tertiary shadow-md"
							/>
							{errors.confirmPassword?.type === "required" && (
								<p className="self-start text-small ml-16 -mt-3 text-red">
									Confirmar Senha é obrigatório
								</p>
							)}
							{errors.confirmPassword?.message && (
								<p className="self-start text-small ml-16 -mt-3 text-red">
									{errors.confirmPassword?.message}
								</p>
							)}
						</div>
					</form>
					<div className="flex  justify-center">
						<button
							onClick={handleSubmit(onSubmit)}
							className="bg-primary drop-shadow-md min-w-16 h-9 p-4 w-72 mt-16 
						flex rounded-md justify-center items-center
						hover:bg-secondary 
						"
						>
							<p className="text-white font-medium ">Avançar</p>
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
