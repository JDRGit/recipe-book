import { createAction } from '@reduxjs/toolkit';
import { searchRecipes } from '../api';

export const fetchRecipes = createAction('FETCH_RECIPES');
export const addRecipe = createAction('ADD_RECIPE');
export const createRecipe = createAction('CREATE_RECIPE'); // add this line

export const getAllRecipes = () => async (dispatch) => {
  try {
    const { data } = await searchRecipes();
    dispatch(fetchRecipes(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const addNewRecipe = (recipe) => async (dispatch) => {
  try {
    const { data } = await createRecipe(recipe);
    dispatch(addRecipe(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const createNewRecipe = (recipe) => async (dispatch) => {
  try {
    const { data } = await createRecipe(recipe);
    dispatch(createRecipe(data)); // modify this line
  } catch (error) {
    console.log(error.message);
  }
};