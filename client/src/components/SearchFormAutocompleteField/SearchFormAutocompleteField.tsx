import {Form, Select} from "antd";
import React, {memo} from "react";
import {ISelectOption} from "../../types/ISelectOption.ts";

type IProps = {
    label: string
    value: string
    handleChange: (value: string) => void
    options: ISelectOption[]
}

const SearchFormAutocompleteField = memo(
    ({label, value, handleChange, options}: IProps) => {
        return (
            <Form.Item label={label}>
                <Select onChange={(e) => handleChange(e)}
                        value={value}
                        showSearch
                        options={options}
                />
            </Form.Item>
        );
    });

export default SearchFormAutocompleteField;