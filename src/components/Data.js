import React from 'react';

function Data(props) {
  this.style ="display: inline";
  this.x = props.data.map((item)=><div class="listing"> <li className="item">{item}</li></div>);
  return (
    <div className="container">
      <ul className="list" >{x}
        </ul>
    </div>
  );
}

export default Data;
