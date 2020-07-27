import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_RECIPE,
  FETCH_RECIPES,
  FETCH_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
  UPLOAD_PHOTO,
} from "./types";
import recipes from "../apis/recipes";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const uploadPhoto = (photoName) => {
  return {
    type: UPLOAD_PHOTO,
    payload: photoName,
  };
};

export const createRecipe = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await recipes.post("/recipe", { ...formValues, userId });
  if (response.data.data) {
    dispatch({ type: CREATE_RECIPE, payload: response.data.data });
  }

  history.push("/recipes");
};

//recipes.post puts our stream, that is entered through our component form, into our JSON server api
// we then, I think, get a response from the api with the object we created, confirming it is in the api.
// we use that response to update our state (action creator -> reducer -> state) it's very roundabout...

export const fetchRecipes = () => async (dispatch) => {
  const response = await recipes.get("/recipes");
  if (response.data.data) {
    dispatch({ type: FETCH_RECIPES, payload: response.data.data });
  }
};

//THE MISSING LINK WAS DATA.DATA!!!!

export const fetchRecipe = (id) => async (dispatch) => {
  const response = await recipes.get(`/recipe/${id}`);
  if (response.data.data) {
    dispatch({ type: FETCH_RECIPE, payload: response.data.data });
  }
};

export const editRecipe = (id, formValues) => async (dispatch) => {
  const response = await recipes.patch(`/recipe/${id}`, formValues);
  if (response.data) {
    dispatch({ type: EDIT_RECIPE, payload: response.data.recipe });
    console.log(response.data);
  }

  history.push("/recipes");
};

export const deleteRecipe = (id) => async (dispatch) => {
  const response = await recipes.delete(`/recipe/${id}`);
  console.log(response);
  dispatch({ type: DELETE_RECIPE, payload: id });
  history.push("/recipes");
};
// redux thunk is being used for async actions. The other action creators are very simple and don't
// invovle making any API requests. Their dispatch is within the connect function.

// ok next I believe we are going to make our reducers... the createRecipe reducer will interpret the res.data and
// use it to update the state of the redux store. The state will probably start off as an empty array,
// no recipes no data. We will be adding objects to that array. Then we'll pass them back as props to
// the stream list component which will render them for the user.... woah I think I get it
