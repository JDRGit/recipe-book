import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="w-full mb-2" />
      <p className="text-gray-700">{recipe.summary}</p>
    </div>
  );
};

export default Recipe;

