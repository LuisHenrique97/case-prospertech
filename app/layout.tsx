import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Drawer from "@/components/molecules/drawer/drawer";
import Header from "@/components/molecules/header/header";

import StoreProvider from "@/lib/Redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

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
				<body className={inter.className}>
					<div className="flex h-screen flex-col md:flex-row bg-primary overflow-hidden">
						<div className="xs:hidden md:flex">
							<Drawer />
						</div>
						<div className="bg-gray h-screen">
							<Header />
							{children}
						</div>
					</div>
				</body>
			</StoreProvider>
		</html>
	);
}
