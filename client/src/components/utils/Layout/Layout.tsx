import {Layout as AntdLayout} from 'antd'
import Header from "../Header/Header.tsx";
import {ReactNode} from "react";
import Content from "../Content/Content.tsx";
import styles from './layout.module.css'

type IProps = {
    children: ReactNode
}

const Layout = ({children}: IProps) => {
    return (
        <AntdLayout className={styles.layout}>
            <Header/>
            <Content>
                {children}
            </Content>
        </AntdLayout>
    );
};

export default Layout;