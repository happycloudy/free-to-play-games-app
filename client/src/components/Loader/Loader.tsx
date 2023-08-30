import styles from './loader.module.css'
import {Spin} from "antd";

type IProps = {
    active: boolean
}

const Loader = ({active}: IProps) => {
    return (
        <div className={styles.wrap}>
            <Spin size={'large'} spinning={active}/>
        </div>
    );
};

export default Loader;