import React from 'react';
import './App.css';

const CurrenceField = (props) => {
  console.log(typeof props.dataValue);
  return <input type="number" data-type={props.dataType} value={props.dataValue}/>
}

export default CurrenceField;
