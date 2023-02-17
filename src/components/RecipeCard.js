import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-medium text-lg mb-2">{recipe.name}</h3>
          <p className="text-gray-600">{recipe.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
