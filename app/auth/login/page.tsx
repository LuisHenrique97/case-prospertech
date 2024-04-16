import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Banner from "@/lib/assets/images/signIn.png";
import Image from "next/image";

export default function Login() {
	return (
		<main className="card">
			<div className="bg-white w-screen h-full  flex flex-col items-center justify-between">
				<div className="flex self-start p-4">
					<ArrowLeftIcon
						width={24}
						height={24}
						className="cursor-pointer mr-3 text-tertiary"
					/>
					<button>
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
					<div className="mt-4 flex flex-col gap-4 items-center p-2">
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className="h-12 w-72 rounded-lg  bg-gray py-1.5 pl-4 
						 focus:ring-primary focus:ring-2 ring-0
						outline-none ring-inset shadow-md"
						/>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Senha"
							className="h-12 w-72 rounded-lg  bg-gray py-1.5 pl-4 
						 focus:ring-primary focus:ring-2 ring-0
						outline-none ring-inset ring-tertiary shadow-md"
						/>
					</div>
					<div className="flex  justify-center">
						<button
							className="bg-primary drop-shadow-md min-w-16 h-9 p-4 w-72 mt-16 
						flex rounded-md justify-center items-center
						hover:bg-secondary 
						"
						>
							<p className="text-white font-medium ">Avançar</p>
						</button>
					</div>
					<div className="flex gap-2 mt-4">
						<p className="text-small">Se ainda não possui uma conta </p>
						<button>
							<p className="text-small text-primary">clique aqui</p>
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
