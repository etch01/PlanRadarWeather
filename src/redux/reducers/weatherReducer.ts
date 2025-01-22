import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../actions/weatherAction';
import { WeatherData } from '../Interfaces/weatherInterface';

interface WeatherState {
  loading: boolean;
  data?: WeatherData | null;
  error: any;
}

const initialState: WeatherState = {
  loading: false,
  data: null,
  error: null,
};

export const weatherReducer = (state = initialState, action: any): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
