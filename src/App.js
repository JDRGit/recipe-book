import React from 'react';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Recipe Book</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
