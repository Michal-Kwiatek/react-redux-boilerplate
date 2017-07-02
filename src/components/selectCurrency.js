import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select.attrs({
  value: props => props.value,
  onChange: props => props.onChange
})`
	border-radius: 10px;
  height: 30px;
  margin: 5px;
`;


const selectCurrency = (props) => {
  const options = props.currencies.map( (currency) => {
    return (
      <option value={currency} key={currency}> {currency} </option>
    )
  })

  return (
      <StyledSelect value={props.selectedCurrency} 
        onChange={(e)=>props.handleCurrencyChange(e.target.value)}>
        {options}
      </StyledSelect>
  );
};


export default selectCurrency;