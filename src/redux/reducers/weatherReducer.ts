import { SET_CITIES,} from '../actions/citiesAction';

interface CityState {
  a: any;
}

const initialState: CityState = {
  a: [],
};

export const citiesReducer = (state = initialState, action: any): CityState => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        a: action.payload,
      };
    default:
      return state;
  }
};
