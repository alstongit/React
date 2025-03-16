import { useCallback, useEffect, useState, useRef } from 'react'



function App() {
  const [len, setLen] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [specChar, setSpecChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGen = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) str+="1234567890"
    if(specChar) str+="!@#$%^&*()_+=,."

    for(let i = 1; i <=len; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char);
    }

    setPassword(pass);

  }, [len, numAllow, specChar, setPassword]);

  useEffect(()=>{
    passwordGen()
  }, [length, numAllow, specChar, passwordGen])

  const copyPassToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='bg-white flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
            type="text"
            value = {password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}             
        />
        <button onClick={copyPassToClipboard} 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className='flex items-center gap-x-1'>
          <input 
              type="range"
              min = {8}
              max = {100}
              value = {len}
              className='cursor-pointer'
              onChange={(e)=>{setLen(e.target.value)}}
           />
           <label >Length: {len}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
              type="checkbox"
              defaultChecked = {numAllow}
              id='numberInput'
              onChange={()=>{setNumAllow((prev)=> !prev)}}
           />
           <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
              type="checkbox"
              defaultChecked = {specChar}
              id='n=specCharInput'
              onChange={()=>{setSpecChar((prev)=> !prev)}}
           />
           <label htmlFor='specCharInput'>Special Char</label>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
