import React from 'react';
import Detail from './Detail';

class DataItem extends React.Component {
  constructor(props){
    super(props);
    this.x = this.props.data.map((item)=><div class="listing">
                        <li   className="item"><img src="/item.png" className="item-pic"/><span class="item-title">{item}</span>
                        <Detail details={"a"}/></li>
                        </div>);

  }

      render()  {
 return (
    <div  onClick={this.props.modal} >
     {this.x}
    </div>
  );
}
}

export default DataItem;
