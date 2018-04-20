import React from 'react';
import Side from './components/Side';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
        <Side />

          <br />
            {this.props.name}
            <img src="/profile.png" />
         </div>
    );
  }
}

export default Dashboard;
