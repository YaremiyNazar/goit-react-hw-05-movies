import axios from 'axios'

const moviesInstanse = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: "120636c1014a93c478761ecd30b2dd89",
  },
});
export const getTrending = () => {
  return moviesInstanse.get('/trending/movie/day');
};

export const getMovieParams = id => {
  return moviesInstanse.get(`/movie/${id}`);
};

export const getCast = id => {
  return moviesInstanse.get(`/movie/${id}/credits`);
};

export const getReviews = id => {
  return moviesInstanse.get(`/movie/${id}/reviews`);
};

export const getSearchMovie  = value => {
  return moviesInstanse.get('/search/movie', {
    params: {
      query: value,
    },
  });
  
};
