export default function Purchase() {
	return (
		<main className="flex min-h-screen flex-col bg-tertiary items-center justify-between p-24">
			<div className="grid grid-cols-4 bg-white gap-4">
				<p className="bg-primary">casa</p>
				<p className="bg-primary">casa</p>
				<p className="bg-primary">casa</p>
				<p className="bg-primary">casa</p>
				<p className="bg-primary col-span-3 text-center">casa</p>
				<p className="bg-primary">casa</p>
				<p className="bg-primary">casa</p>
				<p className="bg-primary">casa</p>
				<p className="bg-primary">casa</p>
				<div className="grid grid-cols-subgrid col-span-3 gap-2">
					<p className="bg-secondary col-span-2">grid</p>
					<p className="bg-secondary">grid</p>
					<p className="bg-secondary ">grid</p>
				</div>
			</div>
		</main>
	);
}
