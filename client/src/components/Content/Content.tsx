import {Layout} from "antd";
import {ReactNode} from "react";

type IProps = {
    children: ReactNode
}

const Content = ({children}: IProps) => {
    return (
        <Layout.Content>
            {children}
        </Layout.Content>
    );
};

export default Content;