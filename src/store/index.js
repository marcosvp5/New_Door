import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import usersReducer from "./users";
import productsReducer from "./products";
import favoritesReducer from "./favorites";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: usersReducer,
    products: productsReducer,
    favorites: favoritesReducer,
  },
});

export default store;
