
import SearchForm from "../../components/SearchForm/SearchForm";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from "../../helpers/api";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notification from "../../components/Notification/Notificatiom";
import MovieList from "../../components/MovieList/MovieList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error,setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');


  useEffect(() => {
    const fetchSearchMovie = async () => {
      try {
        const { data } = await getSearchMovie (search);
        setMovies(data.results);
      } catch (error) {
           setError( Notify.failure(`Something went wrong. ${error.message}`));
      }
    };
    if (search) {
      fetchSearchMovie();
    }
  }, [search]);
  
  const handleSearch = value => {
    if (!value.trim()) {
      return;
    }
    setSearchParams({ search: value });
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
      {search && movies.length === 0 && !error && (
        <p>No matches: {search}</p>
      )}
       {movies.length < 20 && movies.length > 1 && <Notification />}
    </>
  );
};

export default Movies;