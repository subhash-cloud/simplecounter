import React from 'react';
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleIncreament = () => {
    this.setState({ count: this.state.count + this.props.diff });
  };
  handleDecreament = () => {
    this.setState({ count: this.state.count - this.props.diff });
  };
  render() {
    return (

      <>
        <h1>Counter App</h1>
        
        <span>Count: {this.state.count}</span>

        <button onClick={this.handleIncreament}>Increment</button>
      
        <button onClick={this.handleDecreament}>Decrement</button>
      </>
    );
  }
}
export default Counter;