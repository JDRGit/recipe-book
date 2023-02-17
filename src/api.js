export const API_KEY = 'e159572bd6fc479f9c279f15fd298b82';

export async function searchRecipes(query) {
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export async function getRecipe(id) {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
}
