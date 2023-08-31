import {ReactNode} from "react";
import styles from './game-section.module.css'

type IProps = {
    children: ReactNode
    centered?: boolean
}

const GameSection = ({children, centered}: IProps) => {
    return (
        <section className={`${styles.section} ${centered ? styles.centered : ''}`}>
            {children}
        </section>
    );
};

export default GameSection;