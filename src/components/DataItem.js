import React from 'react';
import Detail from './Detail';
 import Modal from './Modal';

class DataItem extends React.Component {
  constructor(props){
    super(props);
    this.x = this.props.data.map((item)=><div  className="listing">
                        <li key={item.toString()} className="item"><img src="/item.png" className="item-pic"/><span className="item-title">{item}<br/><span className="item-artist">By {this.props.details[0].item.artistName}</span></span>
                        <Detail  details={this.props.details}/></li>
                        </div>);

  }

      render()  {
 return (
    <div  onClick={this.props.modal} >
     {this.x}
      <Modal display="hide"/>
    </div>
  );
}
}

export default DataItem;
