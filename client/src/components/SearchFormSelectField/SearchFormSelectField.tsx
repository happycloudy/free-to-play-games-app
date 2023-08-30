import {Form, Select} from "antd";
import {memo} from "react";
import {sortByOptions} from "../../constants/sortByOptions.ts";

type IProps = {
    label: string
    value: string
    handleChange: (value: string) => void
}


const SearchFormSelectField = memo(
    ({label, value, handleChange}: IProps) => {
        return (
            <Form.Item label={label}>
                <Select placeholder={'Select sort option'}
                        options={sortByOptions}
                        value={value}
                        onChange={handleChange}
                />
            </Form.Item>
        );
    });

export default SearchFormSelectField;