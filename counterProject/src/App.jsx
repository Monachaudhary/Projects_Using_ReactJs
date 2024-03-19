import { useState } from 'react'
import './App.css'

function App() {
  //ham useState hook ka use karege jo hamare ui mai state change hone pr reflect karega
  //useState ko use karege aur default value dengey 15 aur ye hame ek array return karega jisme pahla argumnt variable hoga ur dusra ek function
  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () =>{
    setCounter(++counter);
  }
  const removeValue=() =>{
    if(counter>=0){
      setCounter(--counter);
    }else{
      alert("Counter can't be negative")
    }
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
