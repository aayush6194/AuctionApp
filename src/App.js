import React, { Component } from 'react';
import Cover from './components/Cover';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

 import Modal from './components/Modal';
 import Navbar from './components/Navbar';
 import Footer from './components/Footer';
 import Home from './Home';
 import Profile from './Profile';
 import About from './About';
 import Dashboard from './Dashboard';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { navbar: "hide", modal: "hide", cover: "hide", admin: false, term: "", arry: ["poop","dog", "doggy"], required: ["poop","dog", "doggy"]  };

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
      //
    }

  render() {
    return (

      <Router>
     <div>
       <Header modal={this.modal} navbar={this.navbar.bind(this)} icon = {this.state.navbar} />
       <Cover display={this.state.cover} />
       <Navbar display={this.state.navbar}  navbar={this.navbar.bind(this)}/>
       <Modal display={this.state.modal} modal={this.modalOff.bind(this)} />

       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/profile" component={Profile} />
         <Route path="/about" component={About} />
         <Route path="/dashboard" component={Dashboard} />
       </Switch>
       <Footer />
     </div>
   </Router>

    );
  }
}

export default App;
