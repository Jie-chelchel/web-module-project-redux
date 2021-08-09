const initialFavorite = {
  favorites: ["dd"],
  displayFavorites: false,
};

const favoriteReducer = (state = initialFavorite, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default favoriteReducer;
