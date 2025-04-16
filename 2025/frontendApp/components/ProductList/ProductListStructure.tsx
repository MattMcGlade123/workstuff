import { Recipe } from '@/custom-type';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Like from '../Like';

import {
  StyledWrapper,
  StyledTitle
} from './RecipeListStyles';

interface RecipeListStructureProps {
  currentList: Recipe[] | null;
  showNoResults: boolean;
}

const RecipeListStructure: FC<RecipeListStructureProps> = ({ currentList, showNoResults }) => {
  return (
    <StyledWrapper data-testid="recipeList">
      {currentList && currentList?.map((thisListItem) => (
        <div key={thisListItem.id}>
          <StyledTitle>{thisListItem.name} <Like thisId={thisListItem.id} /></StyledTitle>

          <Link href={`recipe-page/${thisListItem.id}`} key={thisListItem.id}>
            <Image src={thisListItem.image} alt={thisListItem.name} width={200} height={200} />
          </Link>
        </div>
      ))}
      {showNoResults && <p>Sorry there were no results for that search</p>}
    </StyledWrapper>
  );
};

export default RecipeListStructure;
