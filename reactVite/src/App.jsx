import { useState } from 'react'
// import './App.css'

function App() {

  let [counter,setCounter] = useState(5)

  
  
  // let counter=5

  const addValue= ()=>{
        // counter = counter + 1
        // setCounter(counter)
        // console.log('clicked',counter);

        if (counter < 20){
          counter =counter + 1
          setCounter(counter)
          
        }
        console.log('clicked ' ,counter);
  }

  const removeValue = () =>{

    if (counter > 0){
      counter =counter - 1
      setCounter(counter)
    }

    console.log('removed value',counter);
  }

 

  return (
    <>
    
    <h2>COUNTER NUMBER</h2>

    <h3> Number :- {counter} </h3>

    <button id="increase" onClick={addValue}>Add Value </button>

    <button id="decrease" onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App

