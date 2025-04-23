import type { Metadata } from 'next'
import ProductPageLogic from './ProductPageLogic';
import { fetchData } from '@/utils/fetchData';
import { ProductType } from '@/custom-type';

export function generateMetadata(): Metadata {
  return {
    title: `Product Page`,
  };
}

export default async function Page(props: any) {
  const { productSlug } = await props?.params;

  const { finalData, error } = await fetchData<{ products: ProductType[], error: any }>(`http://localhost:8080/products/${productSlug}`)

  console.log('finalData', finalData)

  // return <div>TEST</div>

  const componentProps = {
    thisProduct: finalData?.products[0],
    error
  }

  return <ProductPageLogic {...componentProps} />;
}
