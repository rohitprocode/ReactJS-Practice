import React from 'react'
import './PlayButton.css'

function PlayButton() {
  return (
      <button onClick={()=>console.log("Play Button Clicked")} >Play</button>
  )
}

export default PlayButton
