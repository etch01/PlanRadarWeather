import { NetworkLayer } from '../../services/network layer/networklayer';
import Config from 'react-native-config';
import { saveCityHistory } from '../../services/realmDB/historicalWeatherService';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

const networkLayer = new NetworkLayer();

export const fetchWeather = (cityName: string,cityId?: string) => async (dispatch:any) => {
    dispatch({ type: FETCH_WEATHER_REQUEST });
    try {
      const apiKey = Config.API_KEY;//best way to secure api keys via orchestration layer in the backend
      const endpoint = `/weather?q=${cityName}&appid=${apiKey}`;
      const data = await networkLayer.get_request(endpoint);
      dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data });
      saveCityHistory(Number(cityId),data as any) //Save weather data to realm as history
    } catch (error:any) {
        console.log(error);
      dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message });
    }
  };