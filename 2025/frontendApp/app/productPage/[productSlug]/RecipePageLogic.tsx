'use client';

import { FC } from 'react';
import { selectSiteData } from '@/features/siteData';
import { useSelector } from 'react-redux';
import RecipePageStructure from './RecipePageStructure';


const RecipePageLogic: FC<{ recipeId: number }> = ({ recipeId }) => {
  const allListData = useSelector(selectSiteData);
  const thisRecipe = allListData?.find((recipe) => recipe.id === Number(recipeId));

  const componentProps = {
    thisRecipe
  }

  return (
    <RecipePageStructure {...componentProps} />
  );
};

export default RecipePageLogic;
