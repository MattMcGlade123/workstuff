import { mockProducts } from '../../../shared/mockData/products';
import ProductLogic from './ProductLogic';

interface ProdPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProdPageProps) {
  const { productId } = await params;
  const thisProduct = mockProducts.find((thisItem) => thisItem.id === productId);
  const componentProps = {
    thisProduct,
  };

  return <ProductLogic {...componentProps} />;
}
