import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = 'd8c620888c22581099bcd5e45550c95c';
const API_KEY_PARAM = `api_key=${API_KEY}`

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (build) => ({
    getTrendMovies: build.query({
      query: (page = 1) => `trending/movie/day?page=${page}&${API_KEY_PARAM}`
    }),
    getMovieDetails: build.query({
      query: (movieId) => `movie/${movieId}?${API_KEY_PARAM}`
    }),
    searchMovies: build.query({
      query: (query) => `search/movie?query=${query}&include_adult=false&language=en-US&page=1&${API_KEY_PARAM}`
    }),
  }),
});

export const { 
  useGetTrendMoviesQuery, 
  useGetMovieDetailsQuery,
  useSearchMoviesQuery 
} = moviesApi;

