import React from 'react';

const Recipe = ({ recipe }) => {
  if (!recipe) {
    return null;
  }

  const { title, image, instructions, extendedIngredients } = recipe;

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <img src={image} alt={title} className="rounded-t-lg" />
      <div className="p-4">
        <h2 className="font-bold text-2xl mb-2">{title}</h2>
        <ul>
          {extendedIngredients && extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <p className="text-gray-700 mt-4">{instructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
