import { useEffect, useReducer } from 'react';
import { PlacesState, ChildrenProps } from '../../interfaces/places.interface';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers/getUserLocation';

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

export const PlacesProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((longLat) =>
      dispatch({ type: 'SET_USER_LOCATION', payload: longLat })
    );
  }, []);

  return (
    <PlacesContext.Provider
      value={{
        ...state,
      }}>
      {children}
    </PlacesContext.Provider>
  );
};
