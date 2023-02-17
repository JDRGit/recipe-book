import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h3 className="font-medium mb-2">{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} className="mb-2" />
      <p className="text-gray-700">{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
