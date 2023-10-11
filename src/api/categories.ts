import { executeGraphql } from "./graphqlApi";
import { CategoriesGetListDocument } from "@/gql/graphql";

export async function getCategories() {
	const { categories } = await executeGraphql({ query: CategoriesGetListDocument });

	return categories;
}
