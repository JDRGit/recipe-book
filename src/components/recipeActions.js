import { createAction } from '@reduxjs/toolkit';
import { getRecipes, createRecipe } from '../api';

export const fetchRecipes = createAction('FETCH_RECIPES');
export const addRecipe = createAction('ADD_RECIPE');

export const fetchAllRecipes = () => async dispatch => {
  try {
    const { data } = await getRecipes();
    dispatch(fetchRecipes(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const createNewRecipe = recipe => async dispatch => {
  try {
    const { data } = await createRecipe(recipe);
    dispatch(addRecipe(data));
  } catch (error) {
    console.log(error.message);
  }
};
