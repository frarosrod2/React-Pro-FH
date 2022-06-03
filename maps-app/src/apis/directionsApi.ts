import axios from 'axios';

export const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoicGFjb3Jvc2E5OSIsImEiOiJjbDN3c3RzY3QwY3Z5M2ltbWJ1ODBycTVrIn0.7Dh7oeatYllbeqXTZkJqew',
  },
});
