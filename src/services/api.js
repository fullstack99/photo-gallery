import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.post['Accept'] = "application/json";

const getRequest = (url, params) => axios.get(BASE_URL + url, { params });

// Endpoints
const ENDPOINT = {
  GETPHOTOS: 'photos',
}

export const getPhotos = () => getRequest(ENDPOINT.GETPHOTOS, {});