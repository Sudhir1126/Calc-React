// Calculator.js
import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
    };
  }

  handleInput = (value) => {
    if (this.state.displayValue === '0' && value !== 'C') {
      this.setState({ displayValue: value });
    } else if (value === 'C') {
      this.setState({ displayValue: '0' });
    } else {
      this.setState({ displayValue: this.state.displayValue + value });
    }
  };

  handleCalculate = () => {
    try {
      const result = eval(this.state.displayValue);
      this.setState({ displayValue: result });
    } catch (error) {
      this.setState({ displayValue: 'Error' });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.displayValue}</div>
        <div className="buttons">
          <button className="number" onClick={() => this.handleInput('7')}>7</button>
          <button className="number" onClick={() => this.handleInput('8')}>8</button>
          <button className="number" onClick={() => this.handleInput('9')}>9</button>
          <button className="operation" onClick={() => this.handleInput('+')}>+</button>
          <button className="number" onClick={() => this.handleInput('4')}>4</button>
          <button className="number" onClick={() => this.handleInput('5')}>5</button>
          <button className="number" onClick={() => this.handleInput('6')}>6</button>
          <button className="operation" onClick={() => this.handleInput('-')}>-</button>
          <button className="number" onClick={() => this.handleInput('1')}>1</button>
          <button className="number" onClick={() => this.handleInput('2')}>2</button>
          <button className="number" onClick={() => this.handleInput('3')}>3</button>
          <button className="operation" onClick={() => this.handleInput('*')}>*</button>
          <button className="clear" onClick={() => this.handleInput('C')}>C</button>
          <button className="number" onClick={() => this.handleInput('0')}>0</button>
          <button className="equal" onClick={this.handleCalculate}>=</button>
          <button className="operation" onClick={() => this.handleInput('/')}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
