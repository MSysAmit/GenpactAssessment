import React from 'react';
import P from './P';
import Div from './Div';
import Img from './Img';
const empData = props => {
  return (
    <Div>
      <div className="ImgDiv">
        <Img src={props.avatar} />
      </div>
      <div
        style={{
          float: 'left',
          paddingLeft: '49px',
        }}
      >
        ID: {props.id}
      </div>
      <div>
        <P>
          Name: {props.first_name} {props.last_name}
        </P>
      </div>
    </Div>
  );
};

export default empData;
