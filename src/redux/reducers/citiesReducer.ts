import { CityType } from '../../screens/HomeScreen/types';
import { SET_CITIES, SEARCH_CITIES, RESET_CITIES } from '../actions/citiesAction';

interface CityState {
  originalCities: CityType[];
  displayedCities: CityType[];
}

const initialState: CityState = {
  originalCities: [],
  displayedCities: [],
};

export const citiesReducer = (state = initialState, action: any): CityState => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        originalCities: action.payload,
        displayedCities: action.payload,
      };
    case SEARCH_CITIES:        
      return {
        ...state,
        displayedCities: action.payload,
      };
    case RESET_CITIES:
      return{
        ...state,
        displayedCities: state.originalCities
      }
    default:
      return state;
  }
};
