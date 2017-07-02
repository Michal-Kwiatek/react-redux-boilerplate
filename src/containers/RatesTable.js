import React, { Component } from 'react';
import { connect } from 'react-redux';

import RatesTableRow from '../components/ratesTableRow';
import getCurrencyRatesSelector from '../selectors/selectedCurrencyRates';
import mapObject from '../helpers/mapObject';


class RatesTable extends Component {

  render() {
    const { selectedCurrency } = this.props;
    let body;

    if (typeof selectedCurrency === "object") {
      body = mapObject(selectedCurrency.rates, function (key, value) {
        return <RatesTableRow base={selectedCurrency.base}
          rate={value} secondCurrency={key} key={key}/>;
      })
    } else {
      body = selectedCurrency;
    }

    return (
      <div>
        {body}
      </div>
    );
  }
}



function mapStateToProps(state) {
  return { selectedCurrency: getCurrencyRatesSelector(state) };
}


export default connect(mapStateToProps)(RatesTable);
