import CardPizza from "@/components/molecules/card-pizza/card-pizza";

export default function Home() {
	return (
		<main
			className="flex flex-col justify-start items-center
			w-[100%] md:flex-row md:flex-wrap md:justify-center md:items-start pt-4 md:w-fit md:place-content-start
			 rounded-md overflow-y-auto gap-2 h-[100%]"
		>
			<CardPizza />
		</main>
	);
}
