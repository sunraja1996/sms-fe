import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(''); 

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEvaluate = () => {
    try {
      const evaluationResult = eval(input.replace('÷', '/'));
      setResult(evaluationResult.toString()); 
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div id="calculator">
    <div className="calculator">
      <div className="header">
        <div className="input">
          {input} {input && <span> = {result}</span>}
        </div>
      </div>

      <div className="keys">
        <div className="row">
          <div className="number">
            <span onClick={() => handleClick('7')}>7</span>
            <span onClick={() => handleClick('8')}>8</span>
            <span onClick={() => handleClick('9')}>9</span>
          </div>
          <div className="symbol" onClick={() => handleClick('÷')}>
            <span>÷</span>
          </div>
        </div>
        <div className="row">
          <div className="number">
            <span onClick={() => handleClick('4')}>4</span>
            <span onClick={() => handleClick('5')}>5</span>
            <span onClick={() => handleClick('6')}>6</span>
          </div>
          <div className="symbol" onClick={() => handleClick('-')}>
            <span>-</span>
          </div>
        </div>
        <div className="row">
          <div className="number">
            <span onClick={() => handleClick('1')}>1</span>
            <span onClick={() => handleClick('2')}>2</span>
            <span onClick={() => handleClick('3')}>3</span>
          </div>
          <div className="symbol" onClick={() => handleClick('+')}>
            <span>+</span>
          </div>
        </div>
        <div className="row">
          <div className="number">
            <span className="dull" onClick={handleClear}>AC</span>
            <span onClick={() => handleClick('0')}>0</span>
            <span onClick={() => handleClick(',')}>,</span>
          </div>
          <div className="symbol action" onClick={handleEvaluate}>
            <span>=</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
