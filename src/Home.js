import React from 'react';
import Data from './components/Data';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.objects = this.props.dataAll;
    this.state = { term: "" };
  }

  componentDidMount() {
    }

  handleChange(e) {
    this.setState({ term: e.target.value });
  }

  search() {
    this.objects = this.props.dataAll.filter((o)=>o.includes(this.state.term));
  }

  render() {
    return (
      <div>
        <center>
          <h1>Home</h1>
          <br />
          <input
            className="input"
            placeholder="poop"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
          <button className="bt search" onClick={this.search.bind(this)}>Search</button>
        </center>
        <Data details={this.props.details} data= {this.objects} modal={this.props.modal} modalOff={this.props.modalOff}/>
          <center><hr /></center>
      </div>
    );
  }
}
export default Home;
