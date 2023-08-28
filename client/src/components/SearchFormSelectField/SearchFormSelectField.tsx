import {Form, Select} from "antd";

type IProps = {
    label: string
}

const options = [
    {label: 'Дата релиза', value: 'release_date'},
]

const SearchFormSelectField = ({label}: IProps) => {
    return (
        <Form.Item label={label}>
            <Select placeholder={'Select sort option'} options={options}/>
        </Form.Item>
    );
};

export default SearchFormSelectField;