import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type IInitialState = {
    genre: string
    platform: string
    sortBy: string
}

const initialState: IInitialState = {
    genre: '',
    platform: '',
    sortBy: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        updateGenre: (state, action: PayloadAction<string>) => {
            state.genre = action.payload
        },
        updatePlatform: (state, action: PayloadAction<string>) => {
            state.platform = action.payload
        },
        updateSortBy: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload
        },
    }
})

export const {
    updateGenre,
    updatePlatform,
    updateSortBy
} = searchSlice.actions

export const searchReducer = searchSlice.reducer