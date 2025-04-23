import type { Metadata } from 'next'
import ProductListStructure from './ProductListStructure';
import { fetchData } from '@/utils/fetchData';
import { AllProductData } from '@/custom-type';

export const metadata: Metadata = {
  title: 'A lovely product site',
  description: 'A site fully of wonderful products',
}

export default async function ProductList() {
  const { finalData, error } = await fetchData<AllProductData>('http://localhost:8080/products');
  console.log('finalData', finalData)

  const componentProps = {
    pageName: finalData?.pageName || 'Page title',
    products: finalData?.products || [],
    error
  }

  return (
    <ProductListStructure {...componentProps} />
  );
}
