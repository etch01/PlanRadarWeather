import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { citiesReducer } from './reducers/citiesReducer';

const rootReducer = combineReducers({
    cities: citiesReducer,
  });
  
  const middleware = [thunk];
  const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;