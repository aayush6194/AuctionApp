import React from 'react';

class Detail extends React.Component {
  constructor(props){
    super(props);
  //  this.x = this.props.data.map((detail)=><li className="detail">{detail}</li>);
   this.x = "Detail";
  }

      render()  {
 return (
    <ul class="detail">
    {this.x}
    </ul>
  );
}
}

export default Detail;
