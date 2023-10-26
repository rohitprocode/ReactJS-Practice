import React, { useState } from 'react'

function Counter() {
    const [number,setnumber] = useState(0);

    function handleClick(){
        setnumber(number+1)
    }

  return (
    <>
     <h1 style={{color:'white'}}>{number}</h1> 
     <button onClick={handleClick}>Add</button>
    </>
  )
}

export default Counter
