import type { Metadata } from 'next'
import ProductListStructure from './ProductListStructure';
import { query } from '@/lib/ApolloClient';
import { PRODUCT_LIST } from '@/graphQl/queries';

export const metadata: Metadata = {
  title: 'A lovely product site',
  description: 'A site fully of wonderful products',
}

export default async function ProductList() {
  const { data, error } = await query({ query: PRODUCT_LIST });
  console.log('data', data)

  const componentProps = {
    pageName: data?.productList?.pageName || 'Page title',
    products: data?.productList?.products || [],
    error
  }

  return (
    <ProductListStructure {...componentProps} />
  );
}
