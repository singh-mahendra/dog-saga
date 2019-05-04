import {combineReducers} from 'redux';
import breedsReducer from './reducers/BreedsReducers';

export default combineReducers({breeds: breedsReducer});
