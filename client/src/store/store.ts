import {configureStore} from "@reduxjs/toolkit";
import {searchReducer} from "./slices/searchSlice/searchSlice.ts";
import {freeGamesApi} from "../services/api.ts";

const store = configureStore({
    reducer: {
        search: searchReducer,
        [freeGamesApi.reducerPath]: freeGamesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(freeGamesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>


export default store