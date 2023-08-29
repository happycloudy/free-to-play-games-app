import type {IGameShort} from "../../types/IGameShort.ts";
import {Space} from "antd";
import GameCard from "../GameCard/GameCard.tsx";

// TODO: фейк дата
const games: IGameShort[] = [
    {
        id: 540,
        publisher: 'Activision Blizzard',
        release_date: '2022-10-04',
        thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
        title: 'Overwatch 2',
        genre: 'Shooter'
    },
    {
        id: 521,
        publisher: 'Blizzard Entertainment',
        release_date: '2022-06-02',
        thumbnail: 'https://www.freetogame.com/g/521/thumbnail.jpg',
        title: 'Diablo Immortal',
        genre: 'MMOARPG'
    },
    { // апишка знает че мне выдавать, сижу ночами рублюсь))
        id: 517,
        publisher: 'Amazon Games',
        release_date: '2022-02-11',
        thumbnail: 'https://www.freetogame.com/g/517/thumbnail.jpg',
        title: 'Lost Ark',
        genre: 'ARPG'
    }
]

const GamesList = () => {
    return (
        <Space size={[8, 16]} wrap>
            {
                games.map(item => (
                    <GameCard key={item.id} game={item}/>
                ))
            }
        </Space>
    );
};

export default GamesList;