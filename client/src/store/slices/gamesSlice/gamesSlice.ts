import {createSlice} from "@reduxjs/toolkit";
import {IGameShort} from "../../../types/IGameShort.ts";
import {IGame} from "../../../types/IGame.ts";

type IInitialState = {
    games: IGameShort[],
    currentGame: IGame
}

const initialState: IInitialState = {
    games: [],
    currentGame: {
        title: '',
        genre: '',
        screenshots: [],
        id: -1,
        publisher: '',
        thumbnail: '',
        release_date: '',
        minimum_system_requirements: {
            os: '',
            storage: '',
            processor: '',
            graphics: '',
            memory: ''
        },
    }
}

const gamesSlice = createSlice({
    name: 'games',
    initialState: initialState,
    reducers: {}
})

export const gamesReducer = gamesSlice.reducer