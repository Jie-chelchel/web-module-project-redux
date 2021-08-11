import {
  TOOGLE_FAVORITE,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from "../actions/movieActions.js";

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
      if (state.favorites.includes(action.payload)) {
        return state;
      }

      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
