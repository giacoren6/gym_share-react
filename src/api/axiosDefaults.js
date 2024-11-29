import axios from 'axios';

axios.defaults.baseURL = 'https://gym-share-9a40a7748e0a.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;