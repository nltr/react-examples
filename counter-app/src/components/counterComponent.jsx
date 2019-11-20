import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  styles = {
    fontSize: "50px",
    fontWeight: "bold"
  };
  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2" style={this.styles}>
          {this.formatCounter()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCounter() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
