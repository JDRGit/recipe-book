import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./Recipe";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=e159572bd6fc479f9c279f15fd298b82&addRecipeInformation=true`
        );
        setRecipes(response.data.results);
      } catch (error) {
        setError("Error fetching recipes");
      }
    };
    getRecipes();
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSearch} className="mt-8 mb-4">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="border border-gray-400 rounded-lg py-2 px-4 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
        >
          Search
        </button>
      </form>
      {error ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline">{error}</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
