import {
  CREATE_RECIPE,
  FETCH_RECIPES,
  FETCH_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
  UPLOAD_PHOTO,
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_RECIPE:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_RECIPE:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_RECIPE:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_RECIPE:
      return _.omit(state, action.payload);
    case UPLOAD_PHOTO:
      return { ...state, photo: action.payload };
    default:
      return state;
  }
};
