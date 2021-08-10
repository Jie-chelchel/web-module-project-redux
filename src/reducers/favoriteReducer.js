import { TOOGLE_FAVORITE, ADD_TO_FAVORITE } from "../actions/movieActions.js";

const initialFavorite = {
  favorites: [],
  displayFavorites: false,
};

const favoriteReducer = (state = initialFavorite, action) => {
  switch (action.type) {
    case TOOGLE_FAVORITE:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default favoriteReducer;
