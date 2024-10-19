import axios from 'axios';

// API servislerini merkezi bir yerden yönetmek için kullanılabilir.
const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export default API;
