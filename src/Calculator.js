import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleOperation = (operation) => {
    const inputNumber = parseFloat(inputValue) || 0;
    switch (operation) {
      case 'add':
        setResult(result + inputNumber);
        break;
      case 'subtract':
        setResult(result - inputNumber);
        break;
      case 'multiply':
        setResult(result * inputNumber);
        break;
      case 'divide':
        if (inputNumber !== 0) {
          setResult(result / inputNumber);
        } else {
          alert('Cannot divide by zero');
        }
        break;
      default:
        break;
    }
  };

  const resetInput = () => setInputValue('');
  const resetResult = () => setResult(0);

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <div className="buttons">
        <button onClick={() => handleOperation('add')}>add</button>
        <button onClick={() => handleOperation('subtract')}>subtract</button>
        <button onClick={() => handleOperation('multiply')}>multiply</button>
        <button onClick={() => handleOperation('divide')}>divide</button>
        <button onClick={resetInput} className="reset">reset input</button>
        <button onClick={resetResult} className="reset">reset result</button>
      </div>
    </div>
  );
}

export default Calculator;
