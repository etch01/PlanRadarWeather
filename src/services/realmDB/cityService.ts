import { CitySchema } from './citySchema';
import { realm } from './historicalWeatherSchema';

import { CityType } from '../../screens/HomeScreen/types';

class RealmService {
    //Add defauly City
    static addDefaultCity(): void {
        const defaultCity = { id: 1, name: 'Cairo', country: 'Egypt' };
    
        const existingCities = realm.objects<CitySchema>('City');
        if (existingCities.length === 0) {
          try {
            realm.write(() => {
              realm.create('City', defaultCity);
            });
            console.log('Default city added:', defaultCity);
          } catch (error) {
            console.error('Failed to add default city:', error);
          }
        } else {
          console.log('Default city already exists');
        }
      }
    
    // Get all cities
    static getAllCities(): CitySchema[] {
      return realm.objects<CitySchema>('City') as unknown as CitySchema[];
    }
  
  /**
   * Add a city.
   * 
   * @param city - The city data.
   */
    static addCity(city: CityType): void {
      try {
        realm.write(() => {
          realm.create('City', city);
        });
      } catch (error) {
        console.error('Failed to add city:', error);
      }
    }
  }
  
export default RealmService;
