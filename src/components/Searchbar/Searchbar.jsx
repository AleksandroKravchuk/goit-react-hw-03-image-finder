import React from 'react';
import { BiSearch } from 'react-icons/bi';
import {
  SearchbarSection,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  // SearchFormButtonLabel,
} from './Searchbar.styled';

const Searchbar = () => (
  <SearchbarSection>
    <SearchForm>
      <SearchFormButton type="submit">
        <BiSearch />
      </SearchFormButton>
      <SearchFormInput
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
      ></SearchFormInput>
    </SearchForm>
  </SearchbarSection>
);
export default Searchbar;
