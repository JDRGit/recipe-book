import React from 'react';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const recipes = useSelector(state => state.recipes);

  return (
    <div className="flex flex-wrap -mx-4">
      {recipes.map(recipe => (
        <div key={recipe.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;