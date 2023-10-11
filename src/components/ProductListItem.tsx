import Link from "next/link";
import { ProductImage } from "./ProductImage";

export const ProductListItem = ({
	product,
}: {
	product: {
		id: string;
		description: string;
		slug: string;
		name: string;
		variants: { slug: string }[];
		images: { url: string }[];
	};
}) => {
	return (
		<li key={product.id} className="group">
			<Link href={`/product/${product.variants[0]?.slug}`}>
				<article>
					<ProductImage src={product.images[0]!.url} alt={product.name} />
					<div className="text-xs">{product.name}</div>
				</article>
			</Link>
		</li>
	);
};
