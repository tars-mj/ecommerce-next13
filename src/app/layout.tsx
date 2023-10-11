import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next13 Masters",
	description: "E-commerce site built with Next.js and GraphQL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
