// actions/citiesActions.ts
import { CityType } from '../../screens/HomeScreen/types';
import RealmCityService from '../../services/realmDB/cityService';

export const SET_CITIES = 'SET_CITIES';
export const SEARCH_CITIES = 'SEARCH_CITIES';
export const RESET_CITIES = 'RESET_CITIES';

// Action to fetch cities from Realm DB
export const fetchCities = () => async (dispatch: any) => {
  const cities = RealmCityService.getAllCities();
  dispatch({ type: SET_CITIES, payload: [...cities] });
};

// Action to search/filter cities
export const searchCities = (query: string, originalCities: CityType[]) => {
    const filteredCities = originalCities?.filter((city) =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
    return {
      type: SEARCH_CITIES,
      payload: filteredCities,
    };
  };

// Action to reset cities
export const resetCities = () => ({
  type: RESET_CITIES,
});
