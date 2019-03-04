import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: "",
      secondValue: "",
      result: 0
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let result = ((this.state.firstValue / this.state.secondValue) * 100).toFixed(1);
    this.setState({ result });
  };
  handleValueChange = e => {
    this.setState({
      firstValue: e.target.value
    });
  };

  handlePercentChange = e => {
    this.setState({
      secondValue: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input autoFocus type="text" value={this.state.firstValue} onChange={this.handleValueChange} />
            is what percentage of
          </label>
          <label>
            <input type="text" value={this.state.secondValue} onChange={this.handlePercentChange} />
          </label>
          <input type="submit" value="Calculate" />
        </form>
        <h1>{this.state.result}%</h1>
      </div>
    );
  }
}

export default App;
