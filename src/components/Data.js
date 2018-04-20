import React from 'react';
import DataItem from './DataItem';

class Data extends React.Component {
  constructor(props){
    super(props);

  }

      render()  {
 return (
    <div className="container" >
      <ul className="list" >
      <DataItem data={this.props.data} modal={this.props.modal} modalOff={this.props.modalOff}/>
        </ul>
    </div>
  );
}
}

export default Data;
