import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Converter from "./Converter";
import RatesTable from "./RatesTable";
import ExchangedAmount from '../components/exchangedAmount';
import calculateExchangedSelector from '../selectors/calculateExchanged';

const Wrapper = styled.section`
	padding: 4em;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
`;



class App extends Component {
  render() {
    return (
        <Wrapper>
          <Converter />
          <ExchangedAmount amountAfterExchange={this.props.exchangedAmount} />
          <RatesTable />
        </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    exchangedAmount: calculateExchangedSelector(state)
  };
}


export default connect(mapStateToProps)(App);

