
import { useState} from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MdLocationSearching } from 'react-icons/md';
import PropTypes from 'prop-types';
import css from '../SearchForm/SearchForm.module.css';

const SearchForm = ({ onSearch }) => {
   const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value.toLowerCase());
  };
  const formSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      Notify.failure('Sorry, no matching your search query. Please try again.');
      return;
    }
    onSearch(search);
    setSearch('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={formSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.label}>Search</span>

          <MdLocationSearching size={30} fill={'blue'} />
        </button>
        <input
          className={css.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default SearchForm;

