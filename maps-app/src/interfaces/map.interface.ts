import { Map } from 'mapbox-gl';

export interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  setMap: (map: Map) => void;
}

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

export type MapAction = { type: 'setMap'; payload: Map };

export interface MapProps {
  children: JSX.Element | JSX.Element[];
}
