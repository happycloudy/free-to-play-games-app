import React from 'react'
import {Layout} from "antd";
import {ReactNode} from "react";

type IProps = {
    children: ReactNode
}

const contentStyles: React.CSSProperties = {
    padding: '30px 20px'
}

const Content = ({children}: IProps) => {
    return (
        <Layout.Content style={contentStyles}>
            {children}
        </Layout.Content>
    );
};

export default Content;