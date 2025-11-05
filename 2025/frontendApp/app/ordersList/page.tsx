import type { Metadata } from 'next'
import ProductListStructure from './OrdersListStructure';
import { query } from '@/lib/ApolloClient';
import { ORDERS_LIST } from '@/graphQl/queries';

export const metadata: Metadata = {
  title: 'A lovely product site',
  description: 'A site fully of wonderful products',
}

export default async function ProductList() {
  const { data, error } = await query({ query: ORDERS_LIST });

  const componentProps = {
    pageName: data?.ordersList?.pageName || 'Page title',
    orders: data?.ordersList?.products || [],
    error
  }

  return (
    <ProductListStructure {...componentProps} />
  );
}
