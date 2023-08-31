import {ReactNode, useMemo} from "react";
import styles from './game-section.module.css'
import * as classNames from "classnames";

type IProps = {
    children: ReactNode
    centered?: boolean
}

const GameSection = ({children, centered}: IProps) => {
    const sectionClasses = useMemo(() => classNames(styles.section, {
        [styles.centered]: centered
    }), [centered])

    return (
        <section className={sectionClasses}>
            {children}
        </section>
    );
};

export default GameSection;