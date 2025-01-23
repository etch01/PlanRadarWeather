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

export { CitySchema };
