import {Col, Empty, Row, Skeleton} from "antd";
import GameCard from "../GamesCard/GameCard.tsx";
import {useLazyFetchGamesQuery} from "../../services/api.ts";
import {useAppSelector} from "../../store/hooks/useSelector.ts";
import {useCallback, useEffect, useState} from "react";
import {IGameShort} from "../../types/IGameShort.ts";

const itemsPerScroll = 50

const GamesList = () => {
    const [scrollTop, setScrollTop] = useState(0)
    const filter = useAppSelector(state => state.search)
    const [
        trigger,
        {data: games, error, isFetching}
    ] = useLazyFetchGamesQuery()
    const [gamesSlice, setGamesSlice] = useState<IGameShort[]>([])

    const handleUpdateGameSlice = () => {
        if (!games) return
        setGamesSlice(prevState => [
            ...prevState,
            ...games!.slice(prevState.length + 1, prevState.length + 1 + itemsPerScroll)
        ])
    }

    const handleScroll = () => {
        const innerHeight = window.innerHeight
        const scrollTop = document.documentElement.scrollTop
        setScrollTop(innerHeight + scrollTop)
    }

    const fetch = useCallback(() => trigger({
        'sort-by': filter.sortBy,
        genre: filter.genre,
        platform: filter.platform
    }, true), [filter.sortBy, filter.genre, filter.platform])

    useEffect(() => {
        const req = fetch()
        return req.abort
    }, [filter.sortBy, filter.genre, filter.platform])

    useEffect(() => {
        setGamesSlice(games ? games.slice(0, itemsPerScroll) : [])
    }, [games])

    useEffect(() => {
        const req = fetch()
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
            req.abort()
        };
    }, [])

    useEffect(() => {
        const offsetHeight = document.documentElement.offsetHeight
        if (scrollTop !== offsetHeight) return
        handleUpdateGameSlice()
    }, [scrollTop])

    return (
        <>
            {
                error ? <Empty description={'Error happened'}/> : <></>
            }

            <Row justify={'space-around'} gutter={[5, 10]}>
                {
                    !error && !isFetching && gamesSlice && gamesSlice.map(item => (
                        <Col key={item.id}>
                            <GameCard game={item}/>
                        </Col>
                    ))
                }
            </Row>
            {
                isFetching ? <Skeleton active/> : <></>
            }
        </>
    );
};

export default GamesList;