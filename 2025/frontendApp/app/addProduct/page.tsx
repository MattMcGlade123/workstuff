import type { Metadata } from 'next'
import ProductPageLogic from './AddProductLogic';

export function generateMetadata(): Metadata {
  return {
    title: `Product Page`,
  };
}

export default async function Page() {

  return <ProductPageLogic />;
}
