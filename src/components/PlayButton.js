import React from 'react'
import './PlayButton.css'

function PlayButton({Message,Action}) {
  return (
      <button onClick={()=>console.log(Message)}>{Action}</button>
  )
}

export default PlayButton
