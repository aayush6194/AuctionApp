import React from 'react';
import Data from './components/Data';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.objects = [];
    this.state = { term: "", arry: ["poop","dog", "doggy"], required: ["poop","dog", "doggy"] };

  }
  componentDidMount() {
    // setInterval(()=>{
    //   this.objects = this.state.arry;
    //   this.objects.push(0);
    //   this.setState({arry:  this.objects});},2000);
    const API = "";

    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", API);
    ourRequest.onload = function() {
      //var ourData = JSON.parse(ourRequest.responseText);
      //    objects = (ourData).toFixed(2);
    };
    ourRequest.send();
  }

  handleChange(e) {
    this.setState({ term: e.target.value });

  }

  search() {
    this.newArry = [this.state.arry.filter((o)=>o.includes(this.state.term))];

    this.setState({required : this.newArry});

  }

  render() {
    return (
      <div>
        <center>
          <h1>Home</h1>
          <br />

          <input
            class="input"
            placeholder="poop"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
          <button class="bt search" onClick={this.search.bind(this)}>Search</button>

        </center>
        <Data data= {this.state.required}/>
      </div>
    );
  }
}
export default Home;
