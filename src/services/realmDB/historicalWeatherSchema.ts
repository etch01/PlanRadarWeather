import Realm from 'realm';
import { CitySchema } from './citySchema';
import { WeatherData } from '../../redux/Interfaces/weatherInterface';

class CityHistorySchema extends Realm.Object {
  id!: number;
  cityId!: number; // Reference to the City table
  weatherData!: WeatherData;
  recordedAt!: Date;

  static schema = {
    name: 'CityHistory',
    properties: {
      id: 'int',
      cityId: 'int',
      weatherData: 'string',
      recordedAt: 'date',
    },
    primaryKey: 'id',
  };
}

// Initialize Realm with both City and CityHistory schemas
const realmCombined = new Realm({
  schema: [CitySchema, CityHistorySchema],
  schemaVersion: 4,
});

export { CityHistorySchema, realmCombined };
