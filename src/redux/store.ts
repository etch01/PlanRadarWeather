import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { citiesReducer } from './reducers/citiesReducer';
import { weatherReducer } from './reducers/weatherReducer';

const rootReducer = combineReducers({
    cities: citiesReducer,
    weather: weatherReducer
  });
  
  const middleware = [thunk];
  const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;