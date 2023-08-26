import React from 'react'
import {Layout, Typography} from "antd";

const headerStyles: React.CSSProperties = {
    backgroundColor: '#7dbcea',
    textAlign: 'center',
    height: 'auto'
}

const Header = () => {
    return (
        <Layout.Header style={headerStyles}>
            <Typography.Title>
                Free-To-Play Games
            </Typography.Title>
        </Layout.Header>
    );
};

export default Header;