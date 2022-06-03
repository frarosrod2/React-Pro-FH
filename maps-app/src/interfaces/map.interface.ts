import { Map, Marker } from 'mapbox-gl';

export interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  setMap: (map: Map) => void;
  getRouteBetweenPoints: (
    start: [number, number],
    end: [number, number]
  ) => Promise<void>;
}

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

export type MapAction =
  | { type: 'setMap'; payload: Map }
  | { type: 'setMarkers'; payload: Marker[] };

export interface MapProps {
  children: JSX.Element | JSX.Element[];
}
