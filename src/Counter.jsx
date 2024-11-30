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
      <div>
        <button onClick={this.handleIncreament}>+{this.props.diff}</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleDecreament}>-{this.props.diff}</button>
      </div>
    );
  }
}
export default Counter;