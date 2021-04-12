import axios from 'axios';

const API_KEY = '8e2d6c50ec8673fce37d0988f16fea97';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

const fetchTrendingMovies = () => {
  return axios
    .get(`/trending/all/day`)
    .then(({ data: { results } }) => console.log(results));
};

const searchMovie = (query = 'Batman') => {
  return axios
    .get(`/search/movie?query=${query}`)
    .then(({ data: { results } }) => console.log(results));
};

export default { fetchTrendingMovies, searchMovie };
