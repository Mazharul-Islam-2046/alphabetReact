

import { useState } from 'react'
import './App.css'

function App() {

  // Declared the Array of Alphabets
  const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


  // Took useState array to show output from here
  const [output, setOutput] = useState([])


  // Onclick Function to save and set Total input array
  const collectAlph = (alphabet) =>{

    // Taking this last 2 input to validate 3 continious same alphabate typing
    const lastInput = output[output.length-1];
    const secondLastInput = output[output.length-2]


    // Condition to see if anyone typed same alphabet 3 type so that can replace that with underscore
    if (alphabet === lastInput && alphabet === secondLastInput) {
      return setOutput([...output.slice(0, -2), "_"])
    } else {
      setOutput([...output, alphabet])
    }
  } 

  return (
    <>
      <div className='flex text-[#242424] bg-[#222] items-center justify-center py-6 px-10 gap-6 flex-wrap mx-5'>
        {
          alphabets.map((alphabet, idx) => (
            <button onClick={() => collectAlph(alphabet)} className='py-4 px-6 bg-[#f3f3f3b6] cursor-pointer' key={idx}>
              {
                alphabet
              }
            </button>
          ))
        }
      </div>

      <div className='py-8 px-4 text-center bg-black text-slate-50 mt-6 w-full mx-5'>
        {
          output.join("")  //Using Join("") to show in string form
        }
      </div>
    </>
  )
}

export default App
