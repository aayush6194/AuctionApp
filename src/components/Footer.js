import React from 'react';

 function Footer(props) {
  return (
    <div className="footer">
      <center><br />
        <h2>Lets Connect!</h2>
        <br />
        <div className="border">
          <input className="footer-input" placeholder="Type you email here..." type="text" />
          <button class="bt join">Join</button>
        </div>
        <br />
       <a href="http://www.google.com">  <img
          src="https://image.flaticon.com/icons/svg/69/69407.svg"
          className="logo"
        /> </a>
        <a href="http://www.google.com"> <img
          src="https://image.flaticon.com/icons/svg/69/69366.svg"
          className="logo"
        /></a>
        <a href="http://www.google.com"> <img
          src="https://image.flaticon.com/icons/svg/69/69480.svg"
          className="logo"
        /></a>
        <a href="http://www.google.com"><img
          src="https://image.flaticon.com/icons/svg/69/69444.svg"
          className="logo"
        /></a>
        <h4 className="right">Designed By: </h4>
      </center>
    </div>
  );
}


export default Footer;
