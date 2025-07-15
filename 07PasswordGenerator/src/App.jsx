import { useCallback, useState, useEffect ,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)



  // useCallback -- Password Generation
  //use call methods ko memorize karta hai  
  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}[]~`|"

    for (let i = 0; i <= length; i++) {
      let position = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(position)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select() //copy pe highlight karta hai selected part
    passwordRef.current?.setSelectionRange(0,100)  //ek range select karwane ke liye 
    window.navigator.clipboard.writeText(Password)
  },[Password])

  //use effect hook
  useEffect(() => { PasswordGenerator() }, [length, numAllowed, charAllowed, PasswordGenerator])



  return (
    <>
      <div className='w-full h-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-500'>
        {/* Heading */}
        <h1 className='text-3xl text-center text-white mb-5'>Password Generator</h1>

        {/* Password Bar */}
        <div className='flex overflow-hidden mb-4 gap-x-2'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 '
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg active:ring-2 active:ring-yellow-400 transition transform active:scale-95 '
          onClick={copyPasswordToClipBoard}
          >Copy</button>
        </div>


        {/* Adjustment Div */}
        <div className="flex flex-wrap items-center gap-x-6 text-sm">
          {/* Length Slider */}
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(+e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          {/* Number Checkbox */}
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <input
              type="checkbox"
              checked={numAllowed}
              id="numberInput"
              onChange={() => {
                setnumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Special Characters Checkbox */}
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>

        </div>


      </div>
    </>
  )
}

export default App
