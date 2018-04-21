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
    if(this.props.icon === "hide" && this.props.login == false)
      {
    return (
      <div className="header">

        <img className="logoTop"
        src="/logo.jpg"/>
        <span className="login-container" >
        <form>
        <input  className="login" type="text" placeholder="Email.." onChange= {this.props.input}/>
        <input className="login" type="password" placeholder="Password.."  onChange= {this.props.input2}/>
        <button className="bt search" id="login" onClick={this.props.submitData}>LOGIN</button>
      </form>  </span>

        <MenuIcon navbar ={this.props.navbar}/>

      </div>
    );
      }
      else if(this.props.icon === "hide" && this.props.login == true){
        return(<div className="header">
          <img className="logoTop"
          src="/logo.jpg"/>
          <span className="username"> Welcome, {this.props.username}</span>
        </div>);
      }
    else
      {return(<div className="header">
        <img className="logoTop"
        src="/logo.jpg"/>
      </div>);}
  }
}
export default Header;
