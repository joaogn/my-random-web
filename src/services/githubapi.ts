import axios from 'axios';

const githubapi = axios.create({
  baseURL: 'https://api.github.com',
});

export default githubapi;
