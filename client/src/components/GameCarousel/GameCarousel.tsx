import {Carousel} from "antd";
import Section from "../GameSection/Section.tsx";
import {IScreenshot} from "../../types/IScreenshot.ts";
import styles from "./game-carousel.module.css"
import {memo} from "react";

type IProps = {
    images: IScreenshot[]
}

const GameCarousel = memo(({images}: IProps) => {
    return (
        <Section>
            <div className={styles.wrap}>
                <Carousel autoplay>
                    {
                        images.map(screenshot => (
                            <img
                                className={styles.img}
                                src={screenshot.image}
                                key={screenshot.id}
                                alt={'game screenshot'}
                            />
                        ))
                    }
                </Carousel>
            </div>
        </Section>
    );
});

export default GameCarousel;