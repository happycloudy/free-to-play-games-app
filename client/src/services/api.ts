import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IGameShort} from "../types/IGameShort.ts";
import {IGame} from "../types/IGame.ts";

const baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api'

export const freeGamesApi = createApi({
    reducerPath: 'freeGamesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        headers: {
            'X-RapidAPI-Key': '535696714bmsh2899fb4d31b8741p1001ebjsn608c13325599',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }),
    endpoints: (builder) => ({
        fetchGames: builder.query<IGameShort[], void>({
            query: () => `games`,
            transformResponse: (res: IGameShort[]) => res.map(item => ({
                ...item,
                release_date: new Date(item.release_date).toLocaleDateString()
            }))
        }),
        fetchGameById: builder.query<IGame, number>({
            query: (id) => `https://www.freetogame.com/api/game?id=${id}`,
        }),
    }),
})

export const {
    useFetchGamesQuery,
    useFetchGameByIdQuery
} = freeGamesApi