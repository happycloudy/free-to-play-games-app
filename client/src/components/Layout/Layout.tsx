import React from 'react'
import {Layout as AntdLayout} from 'antd'
import Header from "../Header/Header.tsx";
import {ReactNode} from "react";
import Content from "../Content/Content.tsx";

type IProps = {
    children: ReactNode
}

const layoutStyles: React.CSSProperties = {
    minHeight: '100vh'
}

const Layout = ({children}: IProps) => {
    return (
        <AntdLayout style={layoutStyles}>
            <Header/>
            <Content>
                {children}
            </Content>
        </AntdLayout>
    );
};

export default Layout;