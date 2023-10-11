/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: unknown; output: unknown; }
};

/** Assets of products and categories */
export type Asset = {
  alt?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

/** Categories of products */
export type Category = {
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Asset;
  images: Array<Asset>;
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Collection of products */
export type Collection = {
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Asset;
  images: Array<Asset>;
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Color variant of the product */
export type Color =
  | 'BLACK'
  | 'WHITE';

export type CreateAssetInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type CreateOrderInput = {
  email: Scalars['String']['input'];
  orderItems?: InputMaybe<Array<CreateOrderItemInput>>;
  orderReference: Scalars['String']['input'];
  stripeCheckoutId: Scalars['String']['input'];
  total: Scalars['Float']['input'];
};

export type CreateOrderItemInput = {
  orderId: Scalars['String']['input'];
  productVariantId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  total: Scalars['Float']['input'];
};

export type CreateReviewInput = {
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  headline: Scalars['String']['input'];
  name: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Float']['input'];
};

/** Currency in which the price is displayed */
export type Currency = {
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  rate: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DeleteAssetInput = {
  id: Scalars['String']['input'];
};

export type DeleteOrderInput = {
  id: Scalars['String']['input'];
};

export type DeleteOrderItemInput = {
  id: Scalars['String']['input'];
};

export type DeleteReviewInput = {
  id: Scalars['ID']['input'];
};

export type Mutation = {
  createAsset: Asset;
  createOrder: Order;
  createOrderItem: OrderItem;
  createReview: Review;
  deleteAsset: Asset;
  deleteOrder: Order;
  deleteOrderItem: OrderItem;
  deleteReview: Review;
  updateAsset: Asset;
  updateOrder: Order;
  updateOrderItem: OrderItem;
  updateReview: Review;
};


export type MutationCreateAssetArgs = {
  createAssetInput: CreateAssetInput;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreateOrderItemArgs = {
  createOrderItemInput: CreateOrderItemInput;
};


export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};


export type MutationDeleteAssetArgs = {
  deleteAssetInput: DeleteAssetInput;
};


export type MutationDeleteOrderArgs = {
  deleteOrderInput: DeleteOrderInput;
};


export type MutationDeleteOrderItemArgs = {
  deleteOrderItemInput: DeleteOrderItemInput;
};


export type MutationDeleteReviewArgs = {
  deleteReviewInput: DeleteReviewInput;
};


export type MutationUpdateAssetArgs = {
  updateAssetInput: UpdateAssetInput;
};


export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput;
};


export type MutationUpdateOrderItemArgs = {
  updateOrderItemInput: UpdateOrderItemInput;
};


export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput;
};

/** Main order */
export type Order = {
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  orderItems: Array<OrderItem>;
  orderReference: Scalars['String']['output'];
  stripeCheckoutId: Scalars['String']['output'];
  total: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Main order */
export type OrderItem = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  productVariantId: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Products of the store with variants */
export type Product = {
  collections: Array<Collection>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Asset>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  variants: Array<ProductVariant>;
};

/** Variants of the products */
export type ProductVariant = {
  color: Color;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  images: Array<Asset>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  product: Product;
  size: Size;
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  asset: Asset;
  assets: Array<Asset>;
  categories: Array<Category>;
  category: Category;
  collection: Collection;
  collections: Array<Collection>;
  currencies: Array<Currency>;
  currency: Currency;
  defaultCurrency: Currency;
  order: OrderItem;
  orders: Array<OrderItem>;
  product: Product;
  products: Array<Product>;
  review: Review;
  reviews: Array<Review>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
};


export type QueryCurrencyArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrdersArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReviewsArgs = {
  productId: Scalars['ID']['input'];
};

/** Reviews of the products */
export type Review = {
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  productId: Scalars['ID']['output'];
  rating: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Size variant of the product */
export type Size =
  | 'L'
  | 'M'
  | 'S'
  | 'XL';

export type UpdateAssetInput = {
  id: Scalars['ID']['input'];
  url: Scalars['String']['input'];
};

export type UpdateOrderInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  orderReference?: InputMaybe<Scalars['String']['input']>;
  stripeCheckoutId?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOrderItemInput = {
  id: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateReviewInput = {
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  headline: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
};

export type CategoriesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesGetListQuery = { categories: Array<{ id: string, name: string, slug: string }> };

export type ProductsGetListQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListQuery = { products: Array<{ id: string, name: string, slug: string, description: string, images: Array<{ id: string, url: string }>, variants: Array<{ id: string, name: string, slug: string }> }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList {
  categories {
    id
    name
    slug
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($skip: Int, $take: Int) {
  products(skip: $skip, take: $take) {
    id
    name
    slug
    description
    images {
      id
      url
    }
    variants {
      id
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;