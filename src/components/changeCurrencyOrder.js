import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a.attrs({
  onClick: props => props.onClick
})`
  cursor: pointer;
  font-size: 17px;
  margin: 0px 5px;
	border: none;
`;


const changeCurrencyOrder = (props) => {
  return (
    <StyledButton onClick={props.handleClick}><i className="fa fa-refresh"></i></StyledButton>
  );
};


export default changeCurrencyOrder;