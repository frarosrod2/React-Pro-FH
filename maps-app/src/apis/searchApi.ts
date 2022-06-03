import axios from 'axios';

export const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1IjoicGFjb3Jvc2E5OSIsImEiOiJjbDN3c3RzY3QwY3Z5M2ltbWJ1ODBycTVrIn0.7Dh7oeatYllbeqXTZkJqew',
  },
});
