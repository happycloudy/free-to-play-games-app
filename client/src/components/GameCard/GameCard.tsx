import {IGameShort} from "../../types/IGameShort.ts";
import {Card, Space} from "antd";
import GameCardImg from "../GameCardImg/GameCardImg.tsx";
import styles from './game-card.module.css'
import {useNavigate} from "react-router-dom";

type IProps = {
    game: IGameShort
}

const GameCard = ({game}: IProps) => {
    const navigator = useNavigate()
    const handleClick = () => {
        navigator(`game/${game.id}`)
    }

    return (
        <Card
            hoverable
            className={styles.card}
            cover={<GameCardImg src={game.thumbnail}/>}
            onClick={handleClick}
        >
            <Card.Meta title={game.title} description={
                <Space style={{width: '100%'}} direction={'vertical'} size={5}>
                    <div>{game.publisher}</div>
                    <div className={styles.cardFooter}>
                        <span>{game.genre}</span>
                        <span>{game.release_date}</span>
                    </div>
                </Space>
            }/>
        </Card>
    );
};

export default GameCard;