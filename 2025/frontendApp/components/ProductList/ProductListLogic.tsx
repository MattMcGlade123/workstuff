'use client';

import React, { useEffect, useState } from 'react';

import RecipeListStructure from './RecipeListStructure';
import { useSelector } from 'react-redux';
import { selectListData, selectNoResults } from '@/features/siteData';

const RecipeListLogic = () => {
  const currentList = useSelector(selectListData);
  const noResult = useSelector(selectNoResults);
  const [showNoResults, setShowNoResults] = useState<boolean>(false);

  useEffect(() => {
    setShowNoResults(noResult);
  }, [noResult])


  const componentProps = {
    currentList,
    showNoResults
  }

  return <RecipeListStructure {...componentProps} />;
};

export default RecipeListLogic;
