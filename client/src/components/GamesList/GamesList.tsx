import {Empty, Row, Skeleton, Space} from "antd";
import GameCard from "../GameCard/GameCard.tsx";
import {useFetchGamesQuery} from "../../services/api.ts";

const GamesList = () => {
    const {data: games, error, isLoading} = useFetchGamesQuery()

    return (
        <>
            {
                error ? <Empty/> : <></>
            }
            {
                isLoading ? <Skeleton active/> : <></>
            }

            <Space size={[8, 16]} wrap>
                <Row justify={'space-between'}>
                    {
                        games && games.map(item => (
                            <GameCard key={item.id} game={item}/>
                        ))
                    }
                </Row>
            </Space>
        </>
    );
};

export default GamesList;