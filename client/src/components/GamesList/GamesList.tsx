import {Empty, Row, Skeleton, Space} from "antd";
import GameCard from "../GameCard/GameCard.tsx";
import {useFetchGamesQuery} from "../../services/api.ts";
import {useAppSelector} from "../../store/hooks/useSelector.ts";
import {useEffect} from "react";

const GamesList = () => {
    const filter = useAppSelector(state => state.search)
    const {data: games, error, isLoading, refetch} = useFetchGamesQuery({
        'sort-by': filter.sortBy,
        genre: filter.genre,
        platform: filter.platform
    })

    useEffect(() => {
        refetch()
    }, [filter.sortBy, filter.genre, filter.platform])

    return (
        <>
            {
                error ? <Empty description={'Error happened'}/> : <></>
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