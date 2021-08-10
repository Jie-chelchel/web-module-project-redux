export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const TOOGLE_FAVORITE = "TOOGLE_FAVORITE";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};

export const addMovie = (formValue) => {
  return { type: ADD_MOVIE, payload: formValue };
};

export const toggleFavoriteMovie = () => {
  return { type: TOOGLE_FAVORITE };
};

export const addToFavoriteMovie = (movie) => {
  return { type: ADD_TO_FAVORITE, payload: movie };
};

export const removeFromFavoriteMovie = (id) => {
  return { type: REMOVE_FROM_FAVORITE, payload: id };
};
