import { MapAction, MapState } from '../../interfaces/map.interface';

export const mapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case 'setMap':
      return { ...state, isMapReady: true, map: action.payload };

    default:
      return state;
  }
};
