import Layout from "../../components/utils/Layout/Layout.tsx";
import {Button, Empty} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useNavigate, useParams} from "react-router-dom";
import {useLazyFetchGameByIdQuery} from "../../services/api.ts";
import {useEffect, useState} from "react";
import GameSystemRequirements from "../../components/GameSystemRequirements/GameSystemRequirements.tsx";
import GameCarousel from "../../components/GameCarousel/GameCarousel.tsx";
import GameInfo from "../../components/GameInfo/GameInfo.tsx";
import Loader from "../../components/Loader/Loader.tsx";
import {pageStorage} from "../../helpers/pageStorage.ts";
import {IGame} from "../../types/IGame.ts";

const Game = () => {
    const navigator = useNavigate()
    const params = useParams()
    const [cachedGame, setCachedGame] = useState<IGame>()
    const [
        trigger,
        {data: game, isFetching, error}
    ] = useLazyFetchGameByIdQuery()

    const handleBackButton = () => {
        navigator('/')
    }

    useEffect(() => {
        const gameInStore = pageStorage.gameInList(parseInt(params.id!))
        if (gameInStore) {
            setCachedGame(gameInStore)
            return
        }

        const req = trigger(params.id!, true)
        return req.abort
    }, [])

    useEffect(() => {
        if (game) {
            const gameInStore = pageStorage.gameInList(game.id)
            if (gameInStore) {
                setCachedGame(gameInStore)
            } else {
                setCachedGame(game)
                pageStorage.addPage(game)
            }
        }
    }, [game])

    return (
        <Layout>
            <Button onClick={handleBackButton}>
                <ArrowLeftOutlined/>
            </Button>
            {error && !isFetching ? <Empty description={'No data found'}/> : <></>}
            {isFetching ? <Loader active={isFetching}/> : <></>}
            {
                !isFetching && cachedGame ?
                    <>
                        <GameInfo thumbnail={cachedGame.thumbnail}
                                  genre={cachedGame.genre}
                                  title={cachedGame.title}
                                  release_date={cachedGame.release_date}
                                  publisher={cachedGame.publisher}
                                  developer={cachedGame.developer}
                        />
                        <GameCarousel images={cachedGame.screenshots}/>
                        <GameSystemRequirements {...cachedGame.minimum_system_requirements}/>
                    </> :
                    <></>
            }
        </Layout>
    );
};

export default Game;