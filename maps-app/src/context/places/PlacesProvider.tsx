import { useEffect, useReducer } from 'react';
import {
  PlacesState,
  ChildrenProps,
  PlacesResponse,
} from '../../interfaces/places.interface';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers/getUserLocation';
import { searchApi } from '../../apis';

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

export const PlacesProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((longLat) =>
      dispatch({ type: 'SET_USER_LOCATION', payload: longLat })
    );
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) {
      dispatch({ type: 'SET_PLACES', payload: [] });
      return [];
    }
    if (!state.userLocation) throw new Error('No user location');

    dispatch({ type: 'SET_LOADING_PLACES' });

    const resp = await searchApi.get<PlacesResponse>(`${query}.json`, {
      params: {
        proximity: state.userLocation.join(','),
      },
    });

    dispatch({ type: 'SET_PLACES', payload: resp.data.features });
    return resp.data.features;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm,
      }}>
      {children}
    </PlacesContext.Provider>
  );
};
