import { MapView } from '../components';
import { BtnMyLocation } from '../components';
import { SearchBar } from '../components';

export const HomePage = () => {
  return (
    <div>
      <MapView></MapView>
      <BtnMyLocation></BtnMyLocation>
      <SearchBar></SearchBar>
    </div>
  );
};
