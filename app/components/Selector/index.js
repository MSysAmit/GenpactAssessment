import React from 'react';
import Select from './Select';

const selectors = props => {
  return (
    <div style={{ width: '184px' }}>
      <label style={{ margin: '0 0 0px -30%' }}>{props.label}</label>
      <Select value={props.value} onChange={props.onChangeHandler}>
        {props.options}
      </Select>
    </div>
  );
};

export default selectors;
