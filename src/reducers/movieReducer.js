import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "./../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  console.log(state.movies);
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    //   switch (action.type) {
    //     case ADD_MOVIE:
    //       return {
    //         movies: [...state.movies, action.payload]
    //       };
    default:
      return state;
  }
};

export default reducer;
