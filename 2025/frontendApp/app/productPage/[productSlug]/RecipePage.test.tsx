import React from 'react';

import { cleanup, render } from '../../../utils/test-utils';
import RecipePageStructure from './RecipePageStructure';
import { Recipe } from '@/custom-type';

const mockRecipe: Recipe = {
  id: 1,
  name: 'Cake',
  image: '/url',
  ingredients: ['some ingredients'],
  instructions: ['instructions'],
  prepTimeMinutes: 10,
  cookTimeMinutes: 10,
  servings: 2,
  difficulty: 'hard',
  cuisine: 'french',
  caloriesPerServing: 500,
  tags: ['tag'],
  userId: 1,
  rating: 30,
  reviewCount: 2,
  mealType: ['dinner']
}

describe('RecipePageStructure', () => {
  afterEach(() => {
    cleanup();
  });

  test('RecipePageStructure to render all components', async () => {
    const { getByTestId } = render(<RecipePageStructure thisRecipe={mockRecipe} />);

    const container = getByTestId('recipe-container');
    const image = getByTestId('recipe-image');
    const ingredients = getByTestId('recipe-ingredients');
    const name = getByTestId('recipe-name');
    const instructions = getByTestId('recipe-instructions');

    expect(container).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(ingredients).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
  });

  test('RecipePageStructure to render error if theres no recipe', async () => {
    const { getByText } = render(<RecipePageStructure thisRecipe={undefined} />);

    const errorMessage = getByText('Sorry, theres not recipe for this ID');

    expect(errorMessage).toBeInTheDocument();
  });
});