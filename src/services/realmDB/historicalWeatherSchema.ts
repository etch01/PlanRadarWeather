import Realm from 'realm';
import { CitySchema } from './citySchema';

class CityHistorySchema extends Realm.Object {
  id!: number;
  cityId!: number; // Reference to the City table
  weatherData!: string; // Stored as JSON string
  recordedAt!: string; // Stored as string

  static schema = {
    name: 'CityHistory',
    properties: {
      id: 'int',
      cityId: 'int',
      weatherData: 'string', // Ensure valid JSON string is stored
      recordedAt: 'string',
    },
    primaryKey: 'id',
  };
}

// Initialize Realm with both City and CityHistory schemas
const realm = new Realm({schema: [CityHistorySchema, CitySchema], schemaVersion: 3});

export { CityHistorySchema, realm };
