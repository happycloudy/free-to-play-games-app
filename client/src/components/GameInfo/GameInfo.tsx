import {Card, Image, Space, Typography} from "antd";
import Section from "../GameSection/Section.tsx";
import {IGameShort} from "../../types/IGameShort.ts";
import {memo} from "react";

type IProps = Omit<IGameShort, 'id'> & {
    developer: string
}

const GameInfo = memo((props: IProps) => {
    return (
        <Section centered>
            <Card cover={<Image src={props.thumbnail}/>} title={props.title}>
                <Space direction={'vertical'} size={5}>
                    <Typography.Text>
                        <b>Издатель:</b> {props.publisher}
                    </Typography.Text>
                    <Typography.Text>
                        <b>Developer:</b> {props.developer}
                    </Typography.Text>
                    <Typography.Text>
                        <b>Release date</b>: {props.release_date}
                    </Typography.Text>
                    <Typography.Text>
                        <b>Genre</b>: {props.genre}
                    </Typography.Text>
                </Space>
            </Card>
        </Section>
    );
});

export default GameInfo;