import React from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import RecipeFilter from './components/RecipeFilter';
import RecipeSearch from './components/RecipeSearch';

function App() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="py-6">
        <h1 className="text-4xl font-bold text-gray-900">Recipe Book</h1>
      </header>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <RecipeFilter />
        </div>
        <div className="md:w-3/4">
          <RecipeSearch />
          <RecipeList />
          <RecipeForm />
        </div>
      </div>
    </div>
  );
}

export default App;

