import React from 'react';
import { MapState, MapProps } from '../../interfaces/map.interface';
import { MapContext } from './MapContext';
import { useReducer } from 'react';
import { mapReducer } from './mapReducer';
import { Map, Marker, Popup } from 'mapbox-gl';

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
};

export const MapProvider = ({ children }: MapProps) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup().setHTML(`<h4>Aquí estoy</h4>`);

    new Marker().setLngLat(map.getCenter()).setPopup(myLocationPopup).addTo(map);

    dispatch({
      type: 'setMap',
      payload: map,
    });
  };

  return (
    <MapContext.Provider value={{ ...state, setMap }}>{children}</MapContext.Provider>
  );
};
