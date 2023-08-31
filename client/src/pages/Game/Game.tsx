import Layout from "../../components/utils/Layout/Layout.tsx";
import {Button, Empty} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useNavigate, useParams} from "react-router-dom";
import {useLazyFetchGameByIdQuery} from "../../services/api.ts";
import {useEffect} from "react";
import GameSystemRequirements from "../../components/GameSystemRequirements/GameSystemRequirements.tsx";
import GameCarousel from "../../components/GameCarousel/GameCarousel.tsx";
import GameInfo from "../../components/GameInfo/GameInfo.tsx";
import Loader from "../../components/Loader/Loader.tsx";

const Game = () => {
    const navigator = useNavigate()
    const params = useParams()
    const [
        trigger,
        {data: game, isLoading, error}
    ] = useLazyFetchGameByIdQuery()

    const handleBackButton = () => {
        navigator('/')
    }

    useEffect(() => {
        const req = trigger(params.id!, true)
        return req.abort
    }, [])

    return (
        <Layout>
            <Button onClick={handleBackButton}>
                <ArrowLeftOutlined/>
            </Button>
            {error && !isLoading ? <Empty description={'No data found'}/> : <></>}
            {isLoading ? <Loader active={isLoading}/> : <></>}
            {
                game ?
                    <>
                        <GameInfo thumbnail={game.thumbnail}
                                  genre={game.genre}
                                  title={game.title}
                                  release_date={game.release_date}
                                  publisher={game.publisher}
                                  developer={game.developer}
                        />
                        <GameCarousel images={game.screenshots}/>
                        <GameSystemRequirements {...game.minimum_system_requirements}/>
                    </> :
                    <></>
            }
        </Layout>
    );
};

export default Game;