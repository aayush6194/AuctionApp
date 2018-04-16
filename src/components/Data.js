import React from 'react';

class Data extends React.Component {
  constructor(props){
    super(props);
    this.x = props.data.map((item)=><div class="listing"> <li className="item">{item}</li></div>);

  }

      render()  {
 return (
    <div className="container">
      <ul className="list" >{this.x}
        </ul>
    </div>
  );
}
}

export default Data;
