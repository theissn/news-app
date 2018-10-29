import axios from 'axios';

const KEY = '2bdc18ea3e9b4fd690b1e1a98c3630a8';

axios.defaults.baseURL = 'https://newsapi.org/v2';
axios.defaults.headers.common['X-Api-Key'] = KEY;

const get = url => axios
  .get(url)
  .then(data => data.data)
  .catch(err => err);

export { get };
