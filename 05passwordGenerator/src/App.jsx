import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // clicked event
  const [isClicked, setIsClicked] = useState(false);

  // useRef hook 
  const passwordRef = useRef(null);

  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1 )
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
    
    setIsClicked(!isClicked);
  }, [password])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-12 py-12 my-12 text-orange-500 bg-gray-800'>
      <h1 className='text-4xl text-center text-white my-6'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
              type="text"
              value={password}
              className='outline-none w-full py-3 px-3'
              placeholder='Password'
              readOnly
              ref={passwordRef}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className={`${isClicked ? 'bg-green-700' : 'bg-blue-700'} outline-none text-white px-3 py-0.5 shrink-0`}>Copy</button>
        </div>
        <div className='flex text-xl gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: ({length})</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
                type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
                type="checkbox"
                defaultChecked={charAllowed}
                id='charInput'
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
 
    </>
  )
}

export default App
