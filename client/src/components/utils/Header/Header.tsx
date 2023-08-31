import {Layout, Typography} from "antd";
import styles from './header.module.css'

const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Typography.Title>
                Free-To-Play Games
            </Typography.Title>
        </Layout.Header>
    );
};

export default Header;