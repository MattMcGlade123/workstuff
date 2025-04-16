import type { Metadata } from 'next'
import RecipePageLogic from './RecipePageLogic';

export function generateMetadata(): Metadata {
  return {
    title: `Product Page`,
  };
}

export default async function Page(props: any) {
  const { productSlug } = await props?.params;

  const productData =  fetchData('http://localhost:8080/') 

  return <RecipePageLogic recipeId={idAsNumber} />;
}
