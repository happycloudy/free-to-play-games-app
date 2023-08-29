import Layout from "../../components/utils/Layout/Layout.tsx";
import GameInfo from "../../components/GameInfo/GameInfo.tsx";
import GameSystemRequirements from "../../components/GameSystemRequirements/GameSystemRequirements.tsx";
import GameCarousel from "../../components/GameCarousel/GameCarousel.tsx";
import {Button} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const Game = () => {
    const navigator = useNavigate()

    const handleBackButton = () => {
        navigator('/')
    }

    return (
        <Layout>
            <Button onClick={handleBackButton}>
                <ArrowLeftOutlined/>
            </Button>
            <GameInfo/>
            <GameCarousel images={[]}/>
            <GameSystemRequirements/>
        </Layout>
    );
};

export default Game;