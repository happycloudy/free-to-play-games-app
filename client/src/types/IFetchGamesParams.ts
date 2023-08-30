export type IFetchGamesParams = {
    platform: string
    genre: string
    'sort-by': string
}

export type IFetchGamesParamsKeys = keyof IFetchGamesParams

