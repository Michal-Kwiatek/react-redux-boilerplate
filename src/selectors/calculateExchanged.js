import { createSelector } from 'reselect'

const exchangeRatesSelector = state => state.exchangeRate
const converterSelector = state => state.converter

const calculateExhangedAmount = (exchangeRates, converter) => {
  const {moneyAmount, firstCurrency, secondCurrency} = converter;

  if(!moneyAmount) {
    return "Invalid money amount";
  }

  const baseCurrency = exchangeRates.find( elem => elem.base === firstCurrency)
  if(!baseCurrency) {
    return "Fetching rates...";
  }

  let rate;
  if(firstCurrency === secondCurrency) {
    rate = 1;
  } else {
    rate = baseCurrency.rates[secondCurrency]
  }
  
  return (moneyAmount * rate).toFixed(3) + " " + secondCurrency;
}


export default createSelector(
  exchangeRatesSelector,
  converterSelector,
  calculateExhangedAmount
)