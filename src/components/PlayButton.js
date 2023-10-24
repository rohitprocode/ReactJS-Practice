import React from 'react'
import './PlayButton.css'

function PlayButton({ Message, children, onStart, onStop }) {
  let playing = true;
  function clickHandler() {
    if (playing){
      onStart()
      playing = false
    }else{
      onStop()
      playing = true;
    }
  }

  return (
    <button onClick={clickHandler}>{children}</button>
  )
}

export default PlayButton
