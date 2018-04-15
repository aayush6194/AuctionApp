import React, { Component } from 'react';
import Cover from './components/Cover';
import Header from './components/Header';

// import Modal from './components/Modal';
 import Navbar from './components/Navbar';
 import Footer from './components/Footer';
// import Home from './Home';
 import Profile from './Profile';
 import About from './About';
// import Dashboard from './Dashboard';
import { Switch, Route, Router } from 'react-router-dom'
import { Link } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { navbar: "hide", modal: "hide", cover: "hide", admin: false };
      this.modal = this.modal.bind(this);
    }
    componentDidMount() {
      window.addEventListener("resize", () => {
        this.setState({ navbar: "hide" });
      });
      window.addEventListener('resize', function () { "use strict"; window.location.reload(); });

    }
    modal() {
      this.setState({ modal: "", cover: "" });
    }

    modalOff() {
      this.setState({ modal: "hide", cover: "hide" });
    }

    navbar() {
      if (this.state.navbar != "") this.setState({ navbar: "" });
      else this.setState({ navbar: "hide" });
      //   <Navbar display={this.state.navbar}  navbar={this.navbar.bind(this)}/>
    }

  render() {
    return (

        <div>
        <Header modal={this.modal} navbar={this.navbar.bind(this)} icon = {this.state.navbar} />

        <Footer />
        </div>

    );
  }
}

export default App;
