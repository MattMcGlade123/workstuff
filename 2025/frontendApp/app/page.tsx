import type { Metadata } from 'next'
import ProductListStructure from './ProductListStructure';
import { fetchData } from '@/utils/fetchData';

export const metadata: Metadata = {
  title: 'A lovely product site',
  description: 'A site fully of wonderful products',
}

export default async function ProductList() {
  const allProducts = await fetchData('http://localhost:8080/products');

  console.log('allProducts', allProducts);


  const componentProps = {
    ...allProducts.finalData
  }

  return (
    <ProductListStructure {...componentProps} />
  );
}
