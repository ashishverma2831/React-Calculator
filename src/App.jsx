import React, { useState } from 'react'

const App = () => {

  const [result, setResult] = useState('');
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    console.log(result.concat(e.target.name));
  }

  const clear = () =>{
    setResult('')
  }
  const deleteScreen = () =>{
    setResult(result.slice(0,-1))
  }
  const calculate = () =>{
    try {
      setResult(eval(result).toString())
    } catch (error) {
      console.log('Syntax Error');
    }
  }


  return (
    <div className='m-0 p-0 bg-gradient-to-r from-sky-500 to-indigo-400 '>
      <div className='min-h-[100vh] shadow  grid justify-center content-center grid-cols-[repeat(4,100px)] grid-rows-grid-rows-layout'>
        <div className='col-span-full bg-[#000000bf] flex items-end justify-around flex-col p-3 break-words text-wrap'>
            <div className='text-[#ffffffbf] text-[1.5rem]'>{result}</div>
            <div className='text-white text-[2.5rem]' >{result.substring(result.length-1)}</div>
        </div>
        <button onClick={clear}  className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] col-start-1 col-span-2 hover:bg-[#ffffffe6]'>AC</button>
        <button onClick={deleteScreen} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]'>DEL</button>

        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='/'>/</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='1'>1</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='2'>2</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='3'>3</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='*'>*</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='4'>4</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='5'>5</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='6'>6</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='+'>+</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='7'>7</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='8'>8</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='9'>9</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='-'>-</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='.'>.</button>
        <button onClick={handleClick} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] hover:bg-[#ffffffe6]' name='0'>0</button>

        <button onClick={calculate} className='cursor-pointer text-[2rem] border border-solid border-white outline-none bg-[#ffffffbf] col-start-3 col-span-2 hover:bg-[#ffffffe6]'>=</button>
      </div>
    </div>
  )
}

export default App