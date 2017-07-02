import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/combine';
import axios from 'axios';

const fetchRatesIfMissing = store => next => action => {
  const acceptedEvents = ["FIRST_CURRENCY_CHANGED"];

  if (acceptedEvents.indexOf(action.type) > -1) {
    const currency = action.payload;
    const currencies = store.getState().exchangeRate;
    const found = currencies.find(curr => curr.base === currency)

    if (!found) {
      const url = `http://api.fixer.io/latest?base=${currency}`
      axios.get(url)
        .then(response => {
          store.dispatch({
            type: "FETCHED_NEW_RATES",
            payload: {
              base: currency,
              rates: response.data.rates
            }
          })
        }).catch(error => {
          store.dispatch({
            type: "RATES_FETCH_FAIL",
            payload: error
          })
        })
    }
  }

  next(action);
}

const middleware = applyMiddleware(fetchRatesIfMissing);
export default createStore(reducers, composeWithDevTools(middleware));
