import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Navbar(props) {
  var css = "sidebar1 " + props.display +"";
  return (
    <div>
      <div className={css}>
        <ul>
         <li onClick={props.navbar}>  <icon href="#" class="close" /></li>
          <Link to="/" className="none">
            <li className="nav first">Home</li>
          </Link>
          <Link to="/profile" className="none">
            <li className="nav">Profile</li>
          </Link>
          <Link to="/about" className="none">
            <li className="nav">About</li>
          </Link>
           <Link to="/dashboard" className="none">
            <li className="nav">Dashboard</li>
          </Link>
        </ul>
      </div>

      <div className="navbar">
        <ul>
          <Link to="/" className="none">
            <li className="nav">Home</li>
          </Link>
          <Link to="/profile" className="none">
            <li className="nav">Profile</li>
          </Link>
         <Link to="/about" className="none">
            <li className="nav">About</li>
          </Link>
           <Link to="/dashboard" className="none">
            <li className="nav">Dashboard</li>
          </Link>
          <img className="setting" src="https://cdn0.iconfinder.com/data/icons/science-bold-line-2/48/56-512.png"/>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
