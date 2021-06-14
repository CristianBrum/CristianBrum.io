const API_KEY = '877134b4fa07dc732a54a44470a77021';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

const getMovieInfo = async (movieId, type) => {
  let info = {};
  if(movieId) {
    switch(type) {
       case 'movie':
      info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
      break;
      case 'tv':
        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
      break;
      default:
        info = null;
    }
  }
  return info;
};

export default getMovieInfo;