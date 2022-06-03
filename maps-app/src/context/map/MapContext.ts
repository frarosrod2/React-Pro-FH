import { createContext } from 'react';
import { MapContextProps } from '../../interfaces/map.interface';

export const MapContext = createContext<MapContextProps>({} as MapContextProps);
