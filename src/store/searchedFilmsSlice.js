import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const searchedFilms = createSlice({
     name: 'searchedFilms',
    initialState,
    reducers: {
        setSearchedFilms (state, {payload}) {
            state.value = payload
        }
    }
})

export const {setSearchedFilms} = searchedFilms.actions
export default searchedFilms.reducer;
