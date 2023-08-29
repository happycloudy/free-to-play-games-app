import {Carousel, Image} from "antd";
import Section from "../GameSection/Section.tsx";

type IProps = {
    images: string[]
}

const GameCarousel = ({images}: IProps) => {
    return (
        <Section>
            <Carousel>
                {
                    images.map(link => (
                        <Image src={link}/>
                    ))
                }
            </Carousel>
        </Section>
    );
};

export default GameCarousel;