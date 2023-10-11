import { ProductListItem } from "@/components/ProductListItem";

export const ProductList = ({
	products,
}: {
	products: {
		id: string;
		description: string;
		slug: string;
		name: string;
		variants: { slug: string }[];
		images: { url: string }[];
	}[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className="mx-auto grid max-w-7xl grid-cols-3 gap-x-6 gap-y-10 md:grid-cols-6"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
