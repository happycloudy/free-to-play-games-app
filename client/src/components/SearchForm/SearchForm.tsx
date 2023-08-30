import {Form} from "antd";
import SearchFormAutocompleteField from "../SearchFormAutocompleteField/SearchFormAutocompleteField.tsx";
import SearchFormSelectField from "../SearchFormSelectField/SearchFormSelectField.tsx";
import {useAppDispatch} from "../../store/hooks/useDispatch.ts";
import {updateGenre, updatePlatform, updateSortBy} from "../../store/slices/searchSlice/searchSlice.ts";
import {useAppSelector} from "../../store/hooks/useSelector.ts";
import {platformOptions} from "../../constants/platformOptions.ts";
import {genreOptions} from "../../constants/genreOptions.ts";

const SearchForm = () => {
    const {platform, genre, sortBy} = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()

    const handleChangePlatform = (value: string) => {
        dispatch(updatePlatform(value))
    }

    const handleChangeGenre = (value: string) => {
        dispatch(updateGenre(value))
    }

    const handleChangeSortBy = (value: string) => {
        dispatch(updateSortBy(value))
    }

    return (
        <Form labelCol={{span: 3}}
              wrapperCol={{span: 16}}
              style={{maxWidth: 600}}>
            <SearchFormAutocompleteField value={platform}
                                         handleChange={handleChangePlatform}
                                         label={'Platform'}
                                         options={platformOptions}
            />
            <SearchFormAutocompleteField value={genre}
                                         handleChange={handleChangeGenre}
                                         label={'Genre'}
                                         options={genreOptions}
            />
            <SearchFormSelectField value={sortBy}
                                   handleChange={handleChangeSortBy}
                                   label={'Sort by'}
            />
        </Form>
    );
};

export default SearchForm;