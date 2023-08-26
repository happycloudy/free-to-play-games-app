import {Layout as AntdLayout} from 'antd'
import Header from "../Header/Header.tsx";
import {ReactNode} from "react";

type IProps = {
    children: ReactNode
}

const Layout = ({children}: IProps) => {
    return (
        <AntdLayout>
            <Header/>
            {children}
        </AntdLayout>
    );
};

export default Layout;