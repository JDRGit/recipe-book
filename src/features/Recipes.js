import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRecipe, removeRecipe } from './recipesSlice';
import RecipeCard from '../components/RecipeCard';
import RecipeForm from '../components/RecipeForm';

const Recipes = () => {
  const recipes = useSelector(state => state.recipes.recipes);
  const dispatch = useDispatch();

  const handleSaveRecipe = recipe => {
    dispatch(addRecipe(recipe));
  };

  const handleRemoveRecipe = id => {
    dispatch(removeRecipe(id));
  };

  return (
    <div>
      <h2 className="text-2xl font-medium mb-4">Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id} className="mb-4">
          <RecipeCard recipe={recipe} />
          <button
            onClick={() => handleRemoveRecipe(recipe.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      ))}
      <h2 className="text-2xl font-medium mb-4">Add New Recipe</h2>
      <RecipeForm onSave={handleSaveRecipe} />
    </div>
  );
};

export default Recipes;
