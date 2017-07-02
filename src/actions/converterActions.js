export function changeFirstCurrency(firstCurrency) {
  return {
    type: "FIRST_CURRENCY_CHANGED",
    payload: firstCurrency
  }
}

export function changeSecondCurrency(secondCurrency) {
  return {
    type: "SECOND_CURRENCY_CHANGED",
    payload: secondCurrency
  }
}

export function changeMoneyAmount(moneyAmount) {
  return {
    type: "MONEY_AMOUNT_CHANGED",
    payload: moneyAmount
  }
}