import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/molecules/header/header";

import StoreProvider from "@/lib/Redux/StoreProvider";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<StoreProvider>
				<body className={work_sans.className}>
					<div className="flex h-screen flex-col md:flex-row bg-primary overflow-hidden">
						<div className="bg-gray h-screen w-screen flex flex-col justify-between">
							<Header />
							{children}
						</div>
					</div>
				</body>
			</StoreProvider>
		</html>
	);
}
