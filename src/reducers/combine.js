import { combineReducers } from 'redux';
import converter from './converterReducer';
import exchangeRate from './exchangeRateReducer';

export default combineReducers({
  converter,
  exchangeRate
})