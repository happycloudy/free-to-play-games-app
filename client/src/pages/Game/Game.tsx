import Layout from "../../components/utils/Layout/Layout.tsx";
import GameInfo from "../../components/GameInfo/GameInfo.tsx";
import GameSystemRequirements from "../../components/GameSystemRequirements/GameSystemRequirements.tsx";
import GameCarousel from "../../components/GameCarousel/GameCarousel.tsx";
import {Button, Empty} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useNavigate, useParams} from "react-router-dom";
import {useFetchGameByIdQuery} from "../../services/api.ts";
import Loader from "../../components/Loader/Loader.tsx";

const Game = () => {
    const navigator = useNavigate()
    const params = useParams()
    const {data: game, isLoading, error} = useFetchGameByIdQuery(params.id!)

    const handleBackButton = () => {
        navigator('/')
    }

    return (
        <Layout>
            <Button onClick={handleBackButton}>
                <ArrowLeftOutlined/>
            </Button>
            {error ? <Empty description={'No data found'}/> : <></>}
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