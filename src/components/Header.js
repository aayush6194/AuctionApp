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
        src="/logo.jpg"/>
        <MenuIcon navbar ={this.props.navbar}/>
      </div>
    );
      }
    else
      return(<div className="header">
        <img className="logoTop"
        src="/logo.jpg"/>
      </div>);
  }
}
export default Header;
