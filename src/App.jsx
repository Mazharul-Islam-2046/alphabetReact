

import { useState } from 'react'
import './App.css'

function App() {
  const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  const [output, setOutput] = useState([])


  const collectAlph = (alphabet) =>{
    const lastInput = output.pop();
    const secondLastInput = output[output.length-2]

    if (alphabet === lastInput && alphabet === secondLastInput) {
      return setOutput([...output.slice(0, -2), "-"])
    } else {
      output.push(alphabet)
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

      <div className='py-8 px-4 bg-black text-slate-50 mt-6 w-full mx-5'>
        {
          output.join("")
        }
      </div>
    </>
  )
}

export default App
