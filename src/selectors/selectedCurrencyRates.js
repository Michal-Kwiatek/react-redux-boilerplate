import { createSelector } from 'reselect'

const exchangeRatesSelector = state => state.exchangeRate
const selectedCurrencySelector = state => state.converter.firstCurrency

const getRatesForCurrency = (exchangeRates, currency) => {
  return exchangeRates.find(elem => elem.base === currency) || "Fetching...";

}


export default createSelector(
  exchangeRatesSelector,
  selectedCurrencySelector,
  getRatesForCurrency
)