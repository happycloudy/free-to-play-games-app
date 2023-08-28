import {Form} from "antd";
import SearchFormAutocompleteField from "../SearchFormAutocompleteField/SearchFormAutocompleteField.tsx";
import SearchFormSelectField from "../SearchFormSelectField/SearchFormSelectField.tsx";

const SearchForm = () => {
    return (
        <Form labelCol={{span: 3}}
              wrapperCol={{span: 16}}
              style={{maxWidth: 600}}>
            <SearchFormAutocompleteField label={'Platform'}/>
            <SearchFormAutocompleteField label={'Genre'}/>
            <SearchFormSelectField label={'Sort by'}/>
        </Form>
    );
};

export default SearchForm;