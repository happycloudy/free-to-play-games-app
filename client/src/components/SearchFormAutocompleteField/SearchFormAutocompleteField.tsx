import {Form, Select} from "antd";

type IProps = {
    label: string
}

const SearchFormAutocompleteField = ({label}: IProps) => {
    return (
        <Form.Item label={label}>
            <Select showSearch/>
        </Form.Item>
    );
};

export default SearchFormAutocompleteField;