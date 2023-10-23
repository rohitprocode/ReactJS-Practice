import React from 'react'
import './PlayButton.css'

function PlayButton({Message,children,Action}) {
  return (
      <button onClick={()=>(Message)}>{children}</button>
  )
}

export default PlayButton
