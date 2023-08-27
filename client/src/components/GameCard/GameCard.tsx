import {IGame} from "../../types/IGame.ts";
import {Card, Space} from "antd";
import GameCardImg from "../GameCardImg/GameCardImg.tsx";

type IProps = {
    game: IGame
}

const GameCard = ({game}: IProps) => {
    const handleClick = () => {
        console.log('переход к игре', game)
    }

    return (
        <Card
            hoverable
            style={{width: 240}}
            cover={<GameCardImg src={game.thumbnail}/>}
            onClick={handleClick}
        >
            <Card.Meta title={game.title} description={
                <Space direction={'vertical'} size={5}>
                    <div>{game.publisher}, {game.genre}</div>
                    <div>{game.release_date}</div>
                </Space>
            }/>
        </Card>
    );
};

export default GameCard;