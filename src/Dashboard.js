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
                    <center>  <img src="/profile.png" /></center>
         </div>
    );
  }
}

export default Dashboard;
