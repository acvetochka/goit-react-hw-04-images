import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  StyledBiSearchAlt,
} from 'components/Searchbar/Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase().trim());
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
    evt.currentTarget.reset();
    setQuery('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleOnSubmit}>
        <SearchFormButton type="submit">
          <StyledBiSearchAlt />
        </SearchFormButton>
        <SearchFormInput
          name="search"
          type="text"
          onChange={onChange}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
