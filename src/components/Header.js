import React from 'react';
import MenuIcon from './MenuIcon';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  
  handleA(e) {
    this.props.modal();
  }
  render() {
    if(this.props.icon === "hide")
      {
    return (
      <div className="header">
        <img className="logoTop"
        src="https://lh3.googleusercontent.com/nATi16BtV0jZNisDIYAFutlsnB_-2tuHJSCsmSf4ZHLm1v9PxVb2B8RkQ5-AGsf5AUZtDg=s170"/>
        <MenuIcon navbar ={this.props.navbar}/>
      </div>
    );
      }
    else
      return(<div className="header">
        <img className="logoTop"
        src="https://lh3.googleusercontent.com/nATi16BtV0jZNisDIYAFutlsnB_-2tuHJSCsmSf4ZHLm1v9PxVb2B8RkQ5-AGsf5AUZtDg=s170"/>
      </div>);
  }
}
export default Header;
