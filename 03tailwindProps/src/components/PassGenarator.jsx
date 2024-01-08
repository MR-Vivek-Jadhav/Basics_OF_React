import React, { useCallback, useEffect, useRef, useState } from 'react'

function PassGenarator() {

const [lenght,setLength] = useState(8)

const [numberAllowed,setNumberAllowed] = useState(false)

const [charAllowed,setCharAllowed] = useState(false)

const [password,setPassword]=useState("")

// useref

const passwordRef=useRef(null)

const copyPasswordToclipBoard=(function(){
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
})


const passWordGenarator = useCallback(function(){

    let pass=""

    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
        str+="0123456789"
    }

    if(charAllowed){
        str+="!@$%^&*()+_-{}[]?/,<>"
    }

    for (let i = 0; i <=lenght; i++) {
    
        let char=Math.floor(Math.random() * str.length + 1)  // gives index 

        pass+=str.charAt(char)  
        
    }

    setPassword(pass)

    //  console.log(pass);

},[lenght,charAllowed,numberAllowed,setPassword])

// passWordGenarator()uEwhmvmjZ 

useEffect(()=>{
    passWordGenarator()
},[lenght,numberAllowed,charAllowed,passWordGenarator])

  return (
    <div className='m-5 w-full h-screen bg-black flex justify-center items-center  '>

             <div className='border-2 border-white p-6 rounded-xl bg-white text-black  '>

             <p className="text-4xl font-extrabold text-center  ">PassWord Genarator</p> <br />

                <input type="text" name="" id="" value={password} placeholder='password' 
                className="p-2 pl-1 w-3/5  bg-white font-white  rounded-md ml-14 border-2 border-black" 
                readOnly
                ref= {passwordRef} />

                <button className= 'bg-cyan-500 p-2 rounded-md ml-2 hover:shadow-transparent'
                onClick={copyPasswordToclipBoard}>COPY</button> <br />

                <label
                 htmlFor="rangeLabel">
                Lenght :- {lenght }
                </label>

                <input type="range" 
                className='mt-6 ml-5 cursor-pointer' id="rangeLabel" 
                min={6} max={100} 
                onChange={(a)=>{setLength(a.target.value)}}
                />


                <span>
                    <label htmlFor="number" className='ml-3'> NUMBER</label>
                    <input type="checkbox" name="" id="number" className='ml-1' 
                    defaultChecked={numberAllowed}  
                    // onChange={function(){
                    //     setNumberAllowed (function(prev){
                    //             return !prev
                    //     })}}

                    onChange={()=>{setNumberAllowed ((prev)=> !prev)}}
                        
                        />
                </span>

                <span>
                    <label htmlFor="Character" className='ml-3'> CHARACTER</label>
                    <input type="checkbox" name="" id="Character" className='ml-1'
                     defaultChecked={charAllowed}  
                     onChange={()=>{setCharAllowed ((prev)=> !prev)}}
                      />
                </span>


             </div>
            
    </div>
  )
}

export default PassGenarator
