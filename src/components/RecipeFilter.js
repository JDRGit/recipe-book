import React from 'react';

const RecipeFilter = ({ onChange }) => {
  return (
    <div className="flex items-center justify-end space-x-2 mb-4">
      <label htmlFor="filter" className="text-gray-700 font-medium">
        Filter:
      </label>
      <select
        id="filter"
        onChange={onChange}
        className="bg-white border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">All</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
      </select>
    </div>
  );
};

export default RecipeFilter;
