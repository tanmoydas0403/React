import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const[counter, setCounter] = useState(15)
  const [message, setMessage] = useState("")

  //let counter = 15

  const addValue = () => {
    setCounter(prev => {
      if (prev < 20) {
        const newVal = prev + 1;
        console.log("Add Clicked: " + newVal);
        setMessage(""); // Clear message if previously shown
        return newVal;
      } else {
        setMessage("MAXIMUM limit reached..!!");
        console.log("MAXIMUM limit reached..!!");
        return prev;
      }
    });
  };


  const removeValue = () => {
    setCounter(prev => {
      if (prev > 0) {
        const newVal = prev - 1;
        console.log("Remove Clicked: " + newVal);
        setMessage(""); // Clear message if previously shown
        return newVal;
      } else {
        setMessage("MINIMUM limit reached..!!");
        console.log("MINIMUM limit reached..!!");
        return prev;
      }
    });
  };


  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <br />
      {message && <p style={{ color: 'red', fontWeight: 'bold' }}>{message}</p>}
    </>

  )
}

export default App
