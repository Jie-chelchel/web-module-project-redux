import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { removeFromFavoriteMovie } from "../actions/movieActions";

const FavoriteMovieList = (props) => {
  const favorites = props.favoriteMovies;

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        if (!movie) {
          return null;
        }
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span
                onClick={() => {
                  props.removeFromFavoriteMovie(movie.id);
                }}
              >
                <span className="material-icons">remove_circle</span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteMovies: state.favoriteMovies.favorites,
  };
};

export default connect(mapStateToProps, { removeFromFavoriteMovie })(
  FavoriteMovieList
);
