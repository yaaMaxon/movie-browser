import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../services/api';
import favoriteReducer from './favoriteSlice';
import searchedFilmsReducer from './searchedFilmsSlice';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    favorite: favoriteReducer,
    searchedFilms: searchedFilmsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});