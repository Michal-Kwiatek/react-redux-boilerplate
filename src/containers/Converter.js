import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChangeCurrencyOrderButton from '../components/changeCurrencyOrder';
import SelectCurrency from '../components/selectCurrency';
import InputMoneyAmount from '../components/inputMoneyAmount';

import * as ConverterActions from '../actions/converterActions';

class Converter extends Component {
  
  componentWillMount() {
    if(!this.props.converter.firstCurrency) {
      this.props.converterActions.changeFirstCurrency("PLN");
    }
  }

  changeCurrencyOrder() {
    const { converter, converterActions } = this.props;

    converterActions.changeFirstCurrency(converter.secondCurrency);
    converterActions.changeSecondCurrency(converter.firstCurrency);
  }

  render() {
    const { converter, converterActions } = this.props;

    return (
      <div>
        <InputMoneyAmount amount={converter.moneyAmount} 
          handleAmountChange={converterActions.changeMoneyAmount}/>
  
        <SelectCurrency currencies={converter.supportedCurrencies}
          selectedCurrency = {converter.firstCurrency}
          handleCurrencyChange={converterActions.changeFirstCurrency} />

        <ChangeCurrencyOrderButton handleClick={this.changeCurrencyOrder.bind(this)}/>
        
        <SelectCurrency currencies={converter.supportedCurrencies}
          selectedCurrency = {converter.secondCurrency}
          handleCurrencyChange={converterActions.changeSecondCurrency} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { converter: state.converter };
}

function mapDispatchToProps(dispatch) {
  return {
    converterActions: bindActionCreators(ConverterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
