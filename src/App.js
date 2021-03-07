import { useEffect, useState } from 'react';
import './App.css';

import {ThemeProvider} from 'styled-components';
import {getTheme} from "./getTheme";
import THEMES from './constants/themes'
import { Container } from './styles';

function App() {
  
  const num1=[1,2,3];
  const num2=[4,5,6];
  const num3=[7,8,9];
  const num4=[0];  
  const op = ["Add", "Subtract", "Multiply", "Divide", "CE","="];
  const additionOp = ["Sign(+/-)","Square", "Root"];
  
  const [themeName, setThemeName] = useState(THEMES.LIGHT);
  const [opAdded, SetOpAdded] = useState(false);
  const [updatedNum, setUpdatedNum] = useState(false)
  const [error, setError] = useState(false)
  const [currentOp, setCurrentOp] = useState("");
  const [currentNumber,setCurrentNumber] = useState("");
  const [result, setResult] = useState("");

  useEffect(()=> {},[currentNumber])
  
  const numClickEvent = (data) => {
    let num; 
    if(opAdded && !updatedNum){
      console.log("1")
      setCurrentNumber("")
      setUpdatedNum(true);
      num= "";
      num+=data;
      setCurrentNumber(num)
    } else {
      num=   currentNumber;
      num+=data;
      setCurrentNumber(num)
    }
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
      setCurrentOp("")
      SetOpAdded(false)
    }}

    const opClickEvent = (data) => {
      setResult(result? result: currentNumber);
      
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
      case "=" : setCurrentNumber(result);
            break;
      case "Sign(+/-)": 
            setCurrentNumber(-currentNumber);
            break;
      case "Square": 
            setCurrentNumber(currentNumber*currentNumber);
            break;
      case "Root": 
            setCurrentNumber(Math.sqrt(currentNumber));
            break;   
      case "CE": 
            setCurrentNumber("");
            setResult("");
            break;    
      } 
      setUpdatedNum(false);
    }

  return (
  <ThemeProvider theme={getTheme(themeName)}>
   <Container>
     <div>
     <div className="header">
     <h4>Calculator</h4>
     <div className="buttonView">
     <button className="button" onClick={() => setThemeName(THEMES.LIGHT)}>LIGHT</button>
     <button className="button" onClick={() => setThemeName(THEMES.DARK)}>DARK</button>
     </div>
     </div>
     </div>
     <div className="resultStyle">
     {error ? <div>Something went wrong</div>:
     <div className="resultView">{currentNumber=== "" && result === ""? "0": currentNumber}</div> }</div>
     <div className="subView">
      <div className="subNumView">
      <div className="numContainer">{num1.map((data) => <div className="numView" key ={data} onClick={() => { numClickEvent(data) }}>{data}</div>)}</div>
      <div className="numContainer">{num2.map((data) => <div className="numView" key ={data} onClick={() => { numClickEvent(data) }}>{data}</div>)}</div>
      <div className="numContainer">{num3.map((data) => <div className="numView" key ={data} onClick={() => { numClickEvent(data) }}>{data}</div>)}</div>
      <div className="numContainer">{num4.map((data) => <div className="numView" key ={data} onClick={() => { numClickEvent(data) }}>{data}</div>)}</div>
      <div className="numContainer">{additionOp.map((data) => <div className="additionalOp" key ={data} onClick={() => { opClickEvent(data) }}>{data}</div>)}</div>
      </div>
      <div className="opStyle">{op.map((data)=> <div className="operator" key={data} onClick={() => { opClickEvent(data) }}>{data}</div>)}</div>
      </div>
      </Container>
   </ThemeProvider>
  );
}

export default App;
