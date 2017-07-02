import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input.attrs({
  placeholder: props => props.placeholder,
	type: props => props.type,
  value: props => props.value,
  onChange: props => props.onChange
})`
  display: block;
  margin-bottom: 10px;
  height: 30px;
  width: 160px;
	font-size: 1.2em;
  padding-left: 4px;
  border: 1px solid gray;
	border-radius: 3px;
`;

const inputMoneyAmount = (props) => {
  return (
      <StyledInput type="number" value={props.amount} onChange={(e)=>props.handleAmountChange(e.target.value)} 
        placeholder="Money amount..."/>
  );
};


export default inputMoneyAmount;