import React, { useRef, useState } from 'react'

function Counter() {

  const [number, setNumber] = useState(0);
  let num = useRef(0);
  function handleClick(e) {
    e.stopPropagation();
    setNumber(number => number + 1)
    num.current++;
    console.log(num.current)
  }

  return (
    <>
      <h1>{number} and {num.current} </h1>
      <button onClick={handleClick}>Add</button>
      <h1>{num.current}</h1>
      {/* <button onClick={()=>num+1} >Add num</button> */}
    </>
  )
}


export default Counter
