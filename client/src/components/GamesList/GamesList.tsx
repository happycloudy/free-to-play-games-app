import {Col, Empty, Row, Skeleton} from "antd";
import GameCard from "../GameCard/GameCard.tsx";
import {useFetchGamesQuery} from "../../services/api.ts";
import {useAppSelector} from "../../store/hooks/useSelector.ts";
import {useEffect, useState} from "react";
import {IGameShort} from "../../types/IGameShort.ts";

const itemsPerScroll = 50

const GamesList = () => {
    const filter = useAppSelector(state => state.search)
    const {data: games, error, isLoading, refetch} = useFetchGamesQuery({
        'sort-by': filter.sortBy,
        genre: filter.genre,
        platform: filter.platform
    })
    const [gamesSlice, setGamesSlice] = useState<IGameShort[]>([])

    const handleScroll = () => {
        const innerHeight = window.innerHeight
        const scrollTop = document.documentElement.scrollTop
        const offsetHeight = document.documentElement.offsetHeight
        if (innerHeight + scrollTop !== offsetHeight) return

        handleUpdateGameSlice()
    }

    const handleUpdateGameSlice = () => {
        if (!games) return
        setGamesSlice(prevState => [
            ...prevState,
            ...games!.slice(prevState.length + 1, prevState.length + 1 + itemsPerScroll)
        ])
    }

    useEffect(() => {
        refetch()
    }, [filter.sortBy, filter.genre, filter.platform])

    useEffect(() => {
        setGamesSlice(() => games ? games.slice(0, itemsPerScroll) : [])
    }, [games])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <>
            {
                error ? <Empty description={'Error happened'}/> : <></>
            }

            <Row justify={'space-around'} gutter={[5, 10]}>
                {
                    !error && gamesSlice && gamesSlice.map(item => (
                        <Col key={item.id}>
                            <GameCard game={item}/>
                        </Col>
                    ))
                }
            </Row>

            {
                isLoading ? <Skeleton active/> : <></>
            }
        </>
    );
};

export default GamesList;