import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  deleteMovie,
  addToFavoriteMovie,
  removeFromFavoriteMovie,
} from "../actions/movieActions";
const Movie = (props) => {
  const { id } = useParams();
  const { push } = useHistory();

  const movies = props.movies;
  const movie = movies.find((movie) => movie.id === Number(id));

  const deleteMovilHandler = () => {
    props.deleteMovie(movie.id);
    props.removeFromFavoriteMovie(movie.id);
    push("/movies");
  };

  const favoriteMovieHandler = (e) => {
    props.addFavorite(movie);
  };

  return (
    <div className="modal-page col">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{movie.title} Details</h4>
          </div>
          <div className="modal-body">
            <div className="flexContainer">
              <section className="movie-details">
                <div>
                  <label>
                    Title: <strong>{movie.title}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Director: <strong>{movie.director}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Genre: <strong>{movie.genre}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Metascore: <strong>{movie.metascore}</strong>
                  </label>
                </div>
                <div>
                  <label>Description:</label>
                  <p>
                    <strong>{movie.description}</strong>
                  </p>
                </div>
              </section>

              <section>
                {props.displayFavorites && (
                  <span
                    className="m-2 btn btn-dark"
                    onClick={favoriteMovieHandler}
                  >
                    Favorite
                  </span>
                )}

                <span className="delete" onClick={deleteMovilHandler}>
                  <input
                    type="button"
                    className="m-2 btn btn-danger"
                    value="Delete"
                  />
                </span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    displayFavorites: state.favoriteMovies.displayFavorites,
    favoriteMovies: state.favoriteMovies.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (id) => dispatch(deleteMovie(id)),
    addFavorite: (movie) => dispatch(addToFavoriteMovie(movie)),
    removeFromFavoriteMovie: (id) => dispatch(removeFromFavoriteMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
