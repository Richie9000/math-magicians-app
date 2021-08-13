/* eslint-disable */ 
import React, { useState }  from 'react';
import calculate from './logic/calculate';
import operate from './logic/operator'; // eslint-disable-line no-unused-vars

const Calculator = () => {
  const consola = () => {
    console.log(state);
  };
  const UpdateObj = (event) => {
    const val = event.target.value;
    const objstate = state;
    const newState = calculate(objstate, val);
    setState(newState);
    const calculatorDisplay = document.querySelector('.calculator-display');
    if (newState.total === null && newState.next === null && newState.operation === null) {
      calculatorDisplay.textContent = '0';
    } else if (newState.next !== null) {
      calculatorDisplay.textContent = newState.next;
    } else if (newState.next === null && newState.total !== null) {
      calculatorDisplay.textContent = newState.total;
    }
  }
  
  const [state, setState] = useState({total: "0"});
 
    return (
      <div className="calculator">
        <div className="calculator-display">0</div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <button className="calculator-key key-clear" value="AC" type="button" onClick={consola}>AC</button>
              <button className="calculator-key key-sign" value="+/-" type="button" onClick={UpdateObj}>+/-</button>
              <button className="calculator-key key-percent" value="%" type="button" onClick={UpdateObj}>%</button>
            </div>
            <div className="digit-keys">
              <button className="calculator-key key-0" value="0" type="button" onClick={UpdateObj}>0</button>
              <button className="calculator-key key-dot" value="." type="button" onClick={UpdateObj}>●</button>
              <button className="calculator-key key-1" value="1" type="button" onClick={UpdateObj}>1</button>
              <button className="calculator-key key-2" value="2" type="button" onClick={UpdateObj}>2</button>
              <button className="calculator-key key-3" value="3" type="button" onClick={UpdateObj}>3</button>
              <button className="calculator-key key-4" value="4" type="button" onClick={UpdateObj}>4</button>
              <button className="calculator-key key-5" value="5" type="button" onClick={UpdateObj}>5</button>
              <button className="calculator-key key-6" value="6" type="button" onClick={UpdateObj}>6</button>
              <button className="calculator-key key-7" value="7" type="button" onClick={UpdateObj}>7</button>
              <button className="calculator-key key-8" value="8" type="button" onClick={UpdateObj}>8</button>
              <button className="calculator-key key-9" value="9" type="button" onClick={UpdateObj}>9</button>
            </div>
          </div>
          <div className="operator-keys">
            <button className="calculator-key key-divide" value="÷" type="button" onClick={UpdateObj}>÷</button>
            <button className="calculator-key key-multiply" value="x" type="button" onClick={UpdateObj}>*</button>
            <button className="calculator-key key-substract" value="-" type="button" onClick={UpdateObj}>-</button>
            <button className="calculator-key key-add" value="+" type="button" onClick={UpdateObj}>+</button>
            <button className="calculator-key key-equals" value="=" type="button" onClick={UpdateObj}>=</button>
          </div>
        </div>
      </div>
    );
  }


export default Calculator;
