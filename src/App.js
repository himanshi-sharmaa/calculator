import { useState } from 'react';
import './App.css';

function App() {
  
  const num1=[1,2,3];
  const num2=[4,5,6];
  const num3=[7,8,9];  
  const op = ["Add", "Subtract", "Multiply", "Divide", "  =  "];
  
  const [opAdded, SetOpAdded] = useState(false);
  const [error, setError] = useState(false)
  const [currentOp, setCurrentOp] = useState("");
  const [currentNumber,setCurrentNumber] = useState("0");
  const [result, setResult] = useState("0");

  const numClickEvent = (data) => { let num= currentNumber;
    num+=data;
    setCurrentNumber(num)
    console.log("num", num);

    if(opAdded){
      let res = result;

      // eslint-disable-next-line default-case
      switch(currentOp){
       case "+": 
       res= parseInt(res)+ parseInt(num);
           break;

      case "-": 
      res= parseInt(res) - parseInt(num);
          break;


      case "*":  res= parseInt(res) * parseInt(num);
          break;


      case "/":  num===0? setError(true): res = parseInt(res) / parseInt(num);
          break;
      }
      setResult(res.toString());
      setCurrentNumber("")
      setCurrentOp("")
      setCurrentOp('')
      SetOpAdded(false)
      console.log("Result = ", res)
    }}

    const opClickEvent = (data) => {
      setResult(result? result: currentNumber);
      setCurrentNumber("")
      
       // eslint-disable-next-line default-case
      switch(data){
      case "Add": SetOpAdded(true);
          setCurrentOp("+");

          break;

      case "Subtract": SetOpAdded(true);
          setCurrentOp("-");
          break;
      case "Multiply": SetOpAdded(true);
          setCurrentOp("*");
          break;
      case "Divide": SetOpAdded(true);
          setCurrentOp("/");
          break;
      } 
    }

  return (
   <div className="container">
     <h1>Calculator</h1>
     <div className="resultStyle">
     {error ? <div>Something went wrong</div>:
     <div className="App">{currentNumber? currentNumber: result}</div> }</div>
     <div className="subView">
      <div className="subNumView">
      <div className="numContainer">{num1.map((data) => <div className="numView" key ={data} onClick={() => { numClickEvent(data) }}>{data}</div>)}</div>
      <div className="numContainer">{num2.map((data) => <div className="numView" key ={data} onClick={() => { numClickEvent(data) }}>{data}</div>)}</div>
      <div className="numContainer">{num3.map((data) => <div className="numView" key ={data} onClick={() => { numClickEvent(data) }}>{data}</div>)}</div>
      </div>
      <div className="opStyle">{op.map((data)=> <div className="operator" key={data} onClick={() => { opClickEvent(data) }}>{data}</div>)}</div>
      </div>
   </div>
  );
}

export default App;
