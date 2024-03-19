import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef hook
  const passwordRef = useRef(null)

  //ab ham ek aur hook ka use karege jo hamare kaam ayega optimization mai taaki ham ek function ko baar baar call na kare jo bhi us pr depend hai ham vo paameter mai dengey aur function bhi ..aur ye usecallback uss fuction ko cache kar le
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str+="~!@#$%^&*()-_=+[{]}\|;:',<.>/?"
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)
    //yaha ham vo value dete hai jinki vjh se function dubara run kr skta hai ..optimization k liye dete hai
  }, [length,numberAllowed,characterAllowed,setPassword])

  const copyPasswordClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
    //isme ham vo value parameter dete hai jimai agr thoda bhi ched chad ho toh dubara run kar do
  },[length, numberAllowed,characterAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-6 my-8 text-white-600 bg-gray-800'>
        <h1 className='text-white py-2  text-2xl  text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref = {passwordRef}
           />
           <button onClick={copyPasswordClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div>
            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                type="range"
                  min={6} 
                  max={100} 
                  value={length} 
                  className='cursor-pointer' 
                  onChange={(e) => {setLength(e.target.value)}}
                />
                <label className='text-white' htmlFor="">Length :{length}</label>
              </div>
              <div className='flex items-center px-3 gap-x-1'>
                <input 
                type="checkbox" 
                defaultChecked ={numberAllowed}
                id="numberInput"
                onChange={() =>{setNumberAllowed((prev) => !prev);
                }}
                />
                <label htmlFor="numberInput" className='text-white'>Numbers</label>
                
              </div>
              <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox" 
                defaultChecked ={characterAllowed}
                id="characterInput"
                onChange={() =>{setCharacterAllowed((prev) => !prev);
                }}
                />
                <label htmlFor="numberInput" className='text-white'>Characters</label>
                
              </div>
            </div>
            
           </div>
      </div>

    </>
  )
}

export default App
