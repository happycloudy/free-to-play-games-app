import {Col, Row, Typography} from "antd";
import {ISystemRequirements} from "../../types/ISystemRequirements.ts";
import styles from './game-system-requirements.module.css'
import Section from "../GameSection/Section.tsx";

const titleLevel = 3

const GameSystemRequirements = (props: ISystemRequirements) => {
    return (
        <Section>
            <Typography.Title level={2}>
                System Requirements
            </Typography.Title>
            <Row>
                <Col className={styles.item} span={8}>
                    <Typography.Title level={titleLevel}>
                        OS
                    </Typography.Title>
                    <Typography.Paragraph>
                        {props.os}
                    </Typography.Paragraph>
                </Col>
                <Col className={styles.item} span={8}>
                    <Typography.Title level={titleLevel}>
                        Processor
                    </Typography.Title>
                    <Typography.Paragraph>
                        {props.processor}
                    </Typography.Paragraph>
                </Col>
                <Col className={styles.item} span={8}>
                    <Typography.Title level={titleLevel}>
                        Memory
                    </Typography.Title>
                    <Typography.Paragraph>
                        {props.memory}
                    </Typography.Paragraph>
                </Col>
                <Col className={styles.item} span={8}>
                    <Typography.Title level={titleLevel}>
                        Graphics
                    </Typography.Title>
                    <Typography.Paragraph>
                        {props.graphics}
                    </Typography.Paragraph>
                </Col>
                <Col className={styles.item} span={8}>
                    <Typography.Title level={titleLevel}>
                        Storage
                    </Typography.Title>
                    <Typography.Paragraph>
                        {props.storage}
                    </Typography.Paragraph>
                </Col>
            </Row>
        </Section>
    );
};

export default GameSystemRequirements;