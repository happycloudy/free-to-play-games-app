import {Card, Image, Space, Typography} from "antd";
import Section from "../GameSection/Section.tsx";

const GameInfo = () => {
    return (
        <Section centered>
            <Card cover={<Image src={'https://www.freetogame.com/g/517/thumbnail.jpg'}/>} title="Game name">
                <Space direction={'vertical'} size={5}>
                    <Typography.Text>
                        <b>Издатель:</b> 123
                    </Typography.Text>
                    <Typography.Text>
                        <b>Developer:</b> 123
                    </Typography.Text>
                    <Typography.Text>
                        <b>Release date</b>: 123
                    </Typography.Text>
                    <Typography.Text>
                        <b>Genre</b>: 123
                    </Typography.Text>
                </Space>
            </Card>
        </Section>
    );
};

export default GameInfo;