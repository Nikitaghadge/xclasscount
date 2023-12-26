// Counter.js
import React, { Component } from 'react';
import 'tailwindcss/tailwind.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-200 p-8 rounded-md shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4">Counter App</h1>
          <h2 className="text-2xl font-bold mb-4">Count: {this.state.count}</h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={this.handleIncrement}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={this.handleDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;