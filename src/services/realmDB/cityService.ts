import { cityRealm, CitySchema } from './citySchema';

import { CityType } from '../../screens/HomeScreen/types';

class RealmService {
    //Add defauly City
    static addDefaultCity(): void {
        const defaultCity = { id: 1, name: 'Cairo', country: 'Egypt' };
    
        const existingCities = cityRealm.objects<CitySchema>('City');
        if (existingCities.length === 0) {
          try {
            cityRealm.write(() => {
              cityRealm.create('City', defaultCity);
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
      return cityRealm.objects<CitySchema>('City') as unknown as CitySchema[];
    }
  
    // Add a city
    static addCity(city: CityType): void {
      try {
        cityRealm.write(() => {
          cityRealm.create('City', city);
        });
      } catch (error) {
        console.error('Failed to add city:', error);
      }
    }
  }
  
export default RealmService;
