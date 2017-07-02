const exchangeRateReducer = (state = initialState, action) => {

  switch (action.type) {

    case "FETCHED_NEW_RATES":
      return [...state, action.payload]

    default:
      return state;
  }
};


const initialState = [
  // {
  //   base: "EUR",
  //   rates: {
  //     AUD: 1.4683,
  //     BGN: 1.9558,
  //     BRL: 3.6681,
  //     CAD: 1.4766,
  //     CHF: 1.0885,
  //     CNY: 7.6089,
  //     CZK: 26.233,
  //     DKK: 7.4361,
  //     GBP: 0.87453,
  //     HKD: 8.7108,
  //     HRK: 7.3995,
  //     HUF: 307.91,
  //     IDR: 14849,
  //     ILS: 3.939,
  //     INR: 71.952,
  //     JPY: 124.33,
  //     KRW: 1265.4,
  //     MXN: 20.089,
  //     MYR: 4.7756,
  //     NOK: 9.4615,
  //     NZD: 1.5441,
  //     PHP: 55.614,
  //     PLN: 4.2184,
  //     RON: 4.5835,
  //     RUB: 64.23,
  //     SEK: 9.737,
  //     SGD: 1.5457,
  //     THB: 37.923,
  //     TRY: 3.9225,
  //     USD: 1.1167,
  //     ZAR: 14.383
  //   }
  // }
];

export default exchangeRateReducer;