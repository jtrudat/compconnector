import { MainMessage } from './Components/MainMessage'
import { useState } from 'react'
import './App.css';

export default function App() {
  
let [date, setDate] = useState([1, 18, 'troy', 4])

let DateHandler = (passUp)=>{
    setDate((date)=>{
      return([...date, passUp])
    })
}
  
  return (
   <div className='App'>
    hello world
            <br/>
            <br/>
            {date.map((val)=>{
             return (<li>{val} <button>Delete me</button></li>)
})}
            <br/>
    <MainMessage onDateChangeUp={DateHandler}/>
   </div>
  );
}


