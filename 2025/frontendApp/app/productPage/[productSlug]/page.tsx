import type { Metadata } from 'next'
import ProductPageLogic from './ProductPageLogic';
import { A_PRODUCT } from '@/graphQl/queries';
import { query } from '@/lib/ApolloClient';

export function generateMetadata(): Metadata {
  return {
    title: `Product Page`,
  };
}

export default async function Page(props: any) {
  const { productSlug } = await props?.params;
  const { data, error } = await query({ query: A_PRODUCT, variables: { productSlug } });
  console.log('data', data)

  const componentProps = {
    thisProduct: data.aProduct,
    error
  }

  return <ProductPageLogic {...componentProps} />;
}
