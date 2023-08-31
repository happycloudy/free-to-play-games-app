import {Layout} from "antd";
import {ReactNode} from "react";
import styles from './content.module.css'

type IProps = {
    children: ReactNode
}

const Content = ({children}: IProps) => {
    return (
        <Layout.Content className={styles.content}>
            {children}
        </Layout.Content>
    );
};

export default Content;