import { CityHistorySchema, realm } from './historicalWeatherSchema';
import { WeatherData } from '../../redux/Interfaces/weatherInterface';

/**
 * Save city weather history into the CityHistory table.
 * 
 * @param cityId - The ID of the city.
 * @param weatherData - The weather data to save.
 */
export const saveCityHistory = (cityId: number, weatherData: WeatherData) => {
    try {

      const historyId = realm.objects('CityHistory').length + 1; // Generate unique ID
        realm.write(() => {
        realm.create('CityHistory', {
          id: historyId,
          cityId,
          weatherData: JSON.stringify(weatherData), // Save as JSON string
          recordedAt: String(new Date()),
        });
      });
    } catch (error) {
      console.error('Error saving city history:', error);
    }
  };
  
  /**
   * Fetch city weather history by city ID.
   * 
   * @param cityId - The ID of the city.
   * @returns A list of history records for the given city.
   */
  export const fetchCityHistory = (cityId: number) => {
    try {
      return realm.objects('CityHistory').filtered(`cityId == ${cityId}`)
    } catch (error) {
      console.error('Error fetching city history:', error);
      return [];
    }
  };