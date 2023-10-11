import { executeGraphql } from "./graphqlApi";
import { ProductsGetListDocument } from "@/gql/graphql";

export async function getProducts(skip: number = 1, take: number = 12) {
	const { products } = await executeGraphql({
		query: ProductsGetListDocument,
		variables: { skip, take },
	});

	return products;
}
