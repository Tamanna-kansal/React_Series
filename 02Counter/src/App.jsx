import { useState } from 'react'
import './App.css'


function App() {
  //default value inside useState function
  const [counter, setcounter] = useState(0);
  const add = () => {
    setcounter(counter + 1);
  }
  const sub = () => {
    setcounter(counter - 1);
  }
  return (
    <>
      <h1>This is my Counter Project</h1>
      <h2> Counter Value : {counter}</h2>
      <button onClick={add}>Add value :{counter}</button>
      <br /><br />
      <button onClick={sub}>Subtract Value :{counter}</button>
    </>
  )
}


export default App;