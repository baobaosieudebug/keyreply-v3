import axios from 'axios';
// Create an axios instance

const service = axios.create({
  baseURL: 'http://localhost:3001/api/',
  timeout: 5000,
  headers: {
    accept: 'application/json'
  }
});

export default service;
