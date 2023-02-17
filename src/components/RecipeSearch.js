import React, { useState } from 'react';

const RecipeSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search recipes..."
          className="bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-1/2 sm:w-auto"
        />
        <button
          type="submit"
          className="ml-2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default RecipeSearch;
