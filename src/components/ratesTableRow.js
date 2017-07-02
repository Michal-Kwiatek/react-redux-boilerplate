import React from 'react';

const ratesTableRow = (props) => {
  return (
    <p>{props.base} => {props.secondCurrency} rate: {props.rate} </p>
  );
};


export default ratesTableRow;