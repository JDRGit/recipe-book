import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
  loading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    fetchRecipes: state => {
      state.loading = true;
      state.error = null;
    },
    fetchRecipesSuccess: (state, action) => {
      state.loading = false;
      state.recipes = action.payload;
    },
    fetchRecipesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
  },
});

export const { fetchRecipes, fetchRecipesSuccess, fetchRecipesFailure, addRecipe } =
  recipeSlice.actions;

export default recipeSlice.reducer;
