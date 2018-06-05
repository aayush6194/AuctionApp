import React, { Component } from 'react';
import Cover from './components/Cover';
import Header from './components/Header';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import {hashHistory} from "react-router";
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
      this.fakeJson = [{item:{
        lotNumber:"123",
        artistName:"Ayush",
        itemName:"The Item",
        categoryName:"painting",
        classification:"animal",
        description:"its painting by artist",
        auctionItemAddedDate:"2018/02/01",
        itemProducedDate:"1991/02/01",
        estimatedPrice:"$0.1",
        itemImage:"image.jpg",
        productOwner:"nisha",
        status:"live",

      }}];
      this.state = { navbar: "hide", modal: "hide", cover: "hide", selected : "",
                    login :false, admin: false, username : "", password:"",
                    term: "", arry:  ["Item1","Item2", "Item3","Item4","Item5", "Item6"],
                    required:["Item1","Item2", "Item3","Item4","Item5", "Item6"], json:  this.fakeJson    };
    //  this.modal = this.modal.bind(this);
    }

    componentDidMount() {
      window.addEventListener("resize", () => {this.setState({ navbar: "hide" });});
      window.addEventListener('resize', function () { "use strict"; window.location.reload(); });
   }

    modal() {
      this.setState({ modal: "", cover: "" });
    }

    input(e) {
      this.setState({ username: e.target.value });
    }

    input2(e) {
      this.setState({ password: e.target.value });
    }

    submitData ()
    {
      alert("Username : " +this.state.username +" Password : "+ this.state.password   );
      this.setState({login: true});
    }


    postRequest(apiLink){
      this.data = {};
      const API = apiLink;

      var ourRequest = new XMLHttpRequest();
      ourRequest.open("GET",API);
      ourRequest.onload= function(){
        var ourData= JSON.parse(ourRequest.responseText);
        this.data = (ourData);}
  }

    getRequest(apiLink){
      this.data = {};
      const API = apiLink;

      var ourRequest = new XMLHttpRequest();
      ourRequest.open("POST",API);
      ourRequest.onload= function(){
        var ourData= JSON.parse(ourRequest.responseText);
        this.data = (ourData);}
    }

    modalOff() {
      this.setState({ modal: "hide", cover: "hide" });
    }

    navbar() {
      if (this.state.navbar != "") this.setState({ navbar: "" });
      else this.setState({ navbar: "hide" });
    }

  render() {
    const { history} = this.props;
    return (
      <Router>
     <div>

       <Header username ={this.state.username} login ={this.state.login} modal={this.modal.bind(this)} navbar={this.navbar.bind(this)} icon = {this.state.navbar} input={this.input.bind(this)} input2={this.input2.bind(this)}   submitData={this.submitData.bind(this)}/>

       <Cover display={this.state.cover}  modal={this.modalOff.bind(this)}/>
       <Navbar display={this.state.navbar}  navbar={this.navbar.bind(this)}/>
       <Modal display={this.state.modal} modal={this.modalOff.bind(this)}   />

       <Switch>
         <Route exact path="/"  render={()=> <Home details={this.state.json} dataAll={this.state.arry} data={this.state.required} modal={this.modal.bind(this)} modalOff={this.modalOff.bind(this)}/>}/>
         <Route path="/profile" component={Profile} />
         <Route path="/about" component={About} />
         <Route path="/dashboard" render={()=> <Dashboard name="ss"/>} />
       </Switch>
       <Footer />
     </div>
   </Router>

    );
  }
}

export default App;
