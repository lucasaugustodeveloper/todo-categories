import axios from 'axios';

const instace = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export default instace;
