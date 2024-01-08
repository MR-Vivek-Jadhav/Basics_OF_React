import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import PassGenarator from './components/PassGenarator'

function App() {
  const [count, setCount] = useState(0)
  
  const Arr=[ 
    {
    Name:'vivek',
    profile:"Show Profile"
  }

  , {
    Name:'laxman',
   profile:'open'
  }]

  return (
    <>
       {/* <h1 className="bg-black mb-5">Tailwind Test</h1>
       <Navbar detailss={Arr[0]} />
       <Navbar detailss={Arr[1]}/> */}
       <PassGenarator/>
   </>

  )
}

export default App
