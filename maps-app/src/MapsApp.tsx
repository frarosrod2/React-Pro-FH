import { MapProvider, PlacesProvider } from './context';
import { HomePage } from './pages/HomePage';
import './styles.css';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomePage></HomePage>
      </MapProvider>
    </PlacesProvider>
  );
};
