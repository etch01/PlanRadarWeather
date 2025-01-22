import Realm from 'realm';

// Define the City schema
class CitySchema extends Realm.Object {
  id!: number;
  name!: string;
  country!: string;

  static schema = {
    name: 'City',
    properties: {
      id: 'int',
      name: 'string',
      country: 'string',
    },
    primaryKey: 'id',
  };
}

// Initialize Realm with the City schema
const cityRealm = new Realm({ schema: [CitySchema], schemaVersion: 3 });

export { CitySchema, cityRealm };
