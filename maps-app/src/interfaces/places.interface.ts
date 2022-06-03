export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
}

export interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}

export type PlacesAction = {
  type: 'SET_USER_LOCATION';
  payload: [number, number];
};
