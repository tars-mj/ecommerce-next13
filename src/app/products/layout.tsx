import { getProducts } from "@/api/products";
import { Pagination } from "@/components/Pagination";

export default async function Layout({ children }: { children: React.ReactNode }) {
	const products = await getProducts(0, 200);
	const numberOfPages = Math.ceil(products.length / 12);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{children}
			<Pagination numberOfPages={numberOfPages} />
		</main>
	);
}
