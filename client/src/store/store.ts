import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {gamesReducer} from "./slices/gamesSlice/gamesSlice.ts";
import {searchReducer} from "./slices/searchSlice/searchSlice.ts";

const store = configureStore({
    reducer: {
        games: gamesReducer,
        search: searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store