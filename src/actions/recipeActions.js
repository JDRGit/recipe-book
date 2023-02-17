import { createAction } from '@reduxjs/toolkit';
import * as api from '../api';

export const fetchRecipes = createAction('FETCH_RECIPES');
export const addRecipe = createAction('ADD_RECIPE');

export const getRecipes = () => async dispatch => {
  try {
    const { data } = await api.fetchRecipes();
    dispatch(fetchRecipes(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const createRecipe = recipe => async dispatch => {
  try {
    const { data } = await api.createRecipe(recipe);
    dispatch(addRecipe(data));
  } catch (error) {
    console.log(error.message);
  }
};
