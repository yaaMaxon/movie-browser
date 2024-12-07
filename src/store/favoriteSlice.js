import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    films: [],
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFilmToFavorite (state, {payload}) {
            state.films = [...state.films, payload]
        },
        removeFilmFromFavorite (state, {payload}) {
            state.films = state.films.filter(film => film.id !== payload)
        },
    }
})

export const { addFilmToFavorite, removeFilmFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;