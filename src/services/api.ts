import axios from 'axios';

const api = axios.create({
  baseURL: 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2020',
});

export default api;
