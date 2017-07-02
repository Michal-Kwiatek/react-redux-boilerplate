const converterReducer = (state = initialState, action) => {

  switch (action.type) {
    case "MONEY_AMOUNT_CHANGED":
      return {...state, moneyAmount: action.payload};

    case "FIRST_CURRENCY_CHANGED":
      return {...state, firstCurrency: action.payload};
    
    case "SECOND_CURRENCY_CHANGED":
      return {...state, secondCurrency: action.payload};


    default:
      return state;
  }
};

const initialState = {
  supportedCurrencies: [
    "AUD",
    "EUR",
    "BGN",
    "BRL",
    "CAD",
    "CHF",
    "CNY",
    "CZK",
    "DKK",
    "GBP",
    "HKD",
    "HRK",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "JPY",
    "KRW",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PHP",
    "PLN",
    "RON",
    "RUB",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "USD",
    "ZAR"
  ],
  moneyAmount: "",
  firstCurrency: "",
  secondCurrency: "USD"
}

export default converterReducer;