'use client';

import { StyleContainer, StyledInner, StyledSubTitle, StyleIngList, StyleIngWrapper } from './RecipePageStyles';
import { FC } from 'react';
import Image from 'next/image';
import { Recipe } from '@/custom-type';
import Like from '@/components/Like';

interface RecipePageStructureProps {
  thisRecipe: Recipe | undefined
}

const RecipePageStructure: FC<RecipePageStructureProps> = ({ thisRecipe }) => {
  return (
    <StyleContainer data-testid="recipe-container">
      {thisRecipe === undefined && (
        <p>Sorry, theres not recipe for this ID</p>
      )}

      {thisRecipe && (
        <>
          <h2 data-testid="recipe-name">{thisRecipe.name} <Like thisId={thisRecipe.id} /></h2>
          <StyledInner>
            <Image data-testid="recipe-image" priority src={thisRecipe.image} alt={thisRecipe.name} width={500} height={400} />
            <div>
              <StyledSubTitle>Difficulty</StyledSubTitle>
              <p>{thisRecipe.difficulty}</p>
              <StyledSubTitle>Prep Time</StyledSubTitle>
              <p>{thisRecipe.prepTimeMinutes}m</p>
              <StyledSubTitle>Cooking Time</StyledSubTitle>
              <p>{thisRecipe.cookTimeMinutes}m</p>
              <StyledSubTitle>Serves</StyledSubTitle>
              <p>{thisRecipe.servings}</p>
            </div>
          </StyledInner>
          <StyledInner>
            <StyleIngWrapper data-testid="recipe-ingredients">
              <h3>Ingredients</h3>
              <StyleIngList>
                {thisRecipe.ingredients.map((thisIngredient) => (
                  <li key={thisIngredient}>{thisIngredient}</li>
                ))}
              </StyleIngList>
            </StyleIngWrapper>
            <div data-testid="recipe-instructions">
              <h3>Cooking Instructions</h3>
              {thisRecipe.instructions.map((thisInstruction) => (
                <p key={thisInstruction}>{thisInstruction}</p>
              ))}
            </div>
          </StyledInner>
        </>
      )}

    </StyleContainer>
  );
}

export default RecipePageStructure;
