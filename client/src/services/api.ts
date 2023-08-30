import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IGameShort} from "../types/IGameShort.ts";
import {IGame} from "../types/IGame.ts";
import {IFetchGamesParams, IFetchGamesParamsKeys} from "../types/IFetchGamesParams.ts";

const baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api'
const headers = {
    'X-RapidAPI-Key': '535696714bmsh2899fb4d31b8741p1001ebjsn608c13325599',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
}


export const freeGamesApi = createApi({
    reducerPath: 'freeGamesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        headers: headers
    }),
    endpoints: (builder) => ({
        fetchGames: builder.query<IGameShort[], Partial<IFetchGamesParams> | void>({
            query: (params = {}) => {
                const uri = `games`
                let uriParams = ''

                if (params) {
                    for (const param of Object.keys(params)) {
                        uriParams += params[param as IFetchGamesParamsKeys] ?
                            `${param}=${params[param as IFetchGamesParamsKeys]}&` :
                            ''
                    }
                }
                return uri + (uriParams ? `?${uriParams.slice(0, uriParams.length - 1)}` : '')
            },
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