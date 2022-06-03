import mapboxgl from 'mapbox-gl';
import { useContext, useLayoutEffect, useRef } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import { Loading } from './Loading';
import { MapContext } from '../context/map/MapContext';

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
      setMap(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        backgroundColor: 'red',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
      }}></div>
  );
};
