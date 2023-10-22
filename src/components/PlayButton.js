import React from 'react'
import './PlayButton.css'

function PlayButton({Message,children}) {
  return (
      <button onClick={()=>console.log(Message)}>{children}</button>
  )
}

export default PlayButton
