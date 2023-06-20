import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  StyledBiSearchAlt,
} from 'components/Searchbar/Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  onChange = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase().trim() });
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    evt.currentTarget.reset();
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchFormButton type="submit">
            <StyledBiSearchAlt />
          </SearchFormButton>

          <SearchFormInput
            name="search"
            type="text"
            onChange={this.onChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  // query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
