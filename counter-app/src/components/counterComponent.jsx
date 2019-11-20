import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    src: "https://picsum.photos/10"
  };
  render() {
    return (
      <React.Fragment>
        <img src={this.state.src} alt=""></img>
        <span>{this.formatCounter()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCounter() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
