import { getProducts } from "@/api/products";
import { ProductList } from "@/components/ProductList";

export async function generateStaticParams() {
	const products = await getProducts(undefined, 30);
	const numOfPages = Math.ceil(products.length / 12);
	const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);
	return pages.map((page) => ({ params: { page: page.toString() } }));
}

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const page = Number(params.pageNumber);
	const maxProducts = 12;
	const skip = page === 1 ? 0 : page * maxProducts - maxProducts;
	const products = await getProducts(skip, maxProducts);

	return <ProductList products={products} />;
}
