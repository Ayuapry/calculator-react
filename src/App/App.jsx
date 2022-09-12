import { useState } from "react";
import '../App/App.css';
import '../Button/Button.css';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/','*', '+', '-', '.'];

  const updateCalc = value =>{
    if (
      ops.includes(value) & calc === "" || 
      ops.includes(value) & ops.includes(calc.slice(-1))   //to limit the operators
    ){
      return
    }
    setCalc(calc + value);

    if (!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }

  }

  const calculate = () =>{
    setCalc(eval(calc).toFixed(2));
  }

  const clearAll = () =>{
    setCalc("");
    setResult("");
  }

  const percent = () => {
    calc(setCalc(String((parseFloat(calc) / 100))));
  };

  const minusPlus = () => {
    if (calc.charAt(0) === "-") {
      setCalc(calc.substring(1));
    } else {
      setCalc("-" + calc);
    }
  };

  return (
    <div className="App">
      <div className="top">
          
      </div>
      <div className="display">
        {result ? <span>({result})</span> : ""}
        {calc || "0"}
      </div>

      <div className="calc__rows">
          <div className="calc__row">
            <button className="button function" onClick={clearAll}>AC</button>
            <button className="button function" onClick={minusPlus}>+/-</button>
            <button className="button function" onClick={percent}>%</button>
            <button className="button operator" onClick={() => updateCalc('/')}>/</button>
          </div>
          <div className="calc__row">
          <button className="button" onClick={() => updateCalc('7')}>7</button>
          <button className="button" onClick={() => updateCalc('8')}>8</button>
          <button className="button" onClick={() => updateCalc('9')}>9</button>
          <button className="button operator" onClick={() => updateCalc('*')}>x</button>
          </div>
          <div className="calc__row">
          <button className="button" onClick={() => updateCalc('4')}>4</button>
          <button className="button" onClick={() => updateCalc('5')}>5</button>
          <button className="button" onClick={() => updateCalc('6')}>6</button>
          <button className="button operator" onClick={() => updateCalc('-')}>-</button>
          </div>
          <div className="calc__row">
          <button className="button" onClick={() => updateCalc('1')}>1</button>
          <button className="button" onClick={() => updateCalc('2')}>2</button>
          <button className="button" onClick={() => updateCalc('3')}>3</button>
          <button className="button operator" onClick={() => updateCalc('+')}>+</button>
          </div>
          <div className="calc__row">
          <button className="button zero" onClick={() => updateCalc('0')}>0</button>
          <button className="button" onClick={() => updateCalc('.')}>.</button>

          <button className="button operator" onClick={calculate}>=</button>
          </div>
        </div>
        <div className="bottom">

        </div>
    </div>  
      


  );
}

export default App;
