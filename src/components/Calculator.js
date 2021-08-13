import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">0</div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <button className="calculator-key key-clear" type="button">AC</button>
              <button className="calculator-key key-sign" type="button">±</button>
              <button className="calculator-key key-percent" type="button">%</button>
            </div>
            <div className="digit-keys">
              <button className="calculator-key key-0" type="button">0</button>
              <button className="calculator-key key-dot" type="button">●</button>
              <button className="calculator-key key-1" type="button">1</button>
              <button className="calculator-key key-2" type="button">2</button>
              <button className="calculator-key key-3" type="button">3</button>
              <button className="calculator-key key-4" type="button">4</button>
              <button className="calculator-key key-5" type="button">5</button>
              <button className="calculator-key key-6" type="button">6</button>
              <button className="calculator-key key-7" type="button">7</button>
              <button className="calculator-key key-8" type="button">8</button>
              <button className="calculator-key key-9" type="button">9</button>
            </div>
          </div>
          <div className="operator-keys">
            <button className="calculator-key key-divide" type="button">÷</button>
            <button className="calculator-key key-multiply" type="button">*</button>
            <button className="calculator-key key-substract" type="button">-</button>
            <button className="calculator-key key-add" type="button">+</button>
            <button className="calculator-key key-equals" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
