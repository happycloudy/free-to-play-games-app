import {IGame} from "../types/IGame.ts";

const storageKey = 'pageStorage'
const critMsTime = 1000 * 60 * 5

type StorageType = IGame & {
    createTimeStamp: string
}

export const pageStorage = {
    addPage: function (data: IGame) {
        const storage = localStorage.getItem(storageKey)
        const pages: StorageType[] = storage ? JSON.parse(storage) : []
        pages.push({
            ...data,
            id: data.id,
            createTimeStamp: Date.now().toString()
        })
        localStorage.setItem(storageKey, JSON.stringify(pages))
    },

    gameInList: function (id: number): false | IGame {
        const storage = localStorage.getItem(storageKey)
        const pages: StorageType[] = storage ? JSON.parse(storage) : []
        const game = pages.find(item => item.id === id)

        if (game) {
            const now = Date.now()
            const pageDate = parseInt(game.createTimeStamp)
            if (now - pageDate > critMsTime) {
                localStorage.setItem(
                    storageKey,
                    JSON.stringify(pages.filter(item => item.id !== id))
                )
                return false
            }
            return game
        } else {
            return false
        }
    }
}