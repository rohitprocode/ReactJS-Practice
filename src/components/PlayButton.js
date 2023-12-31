import React, { useContext, useState } from 'react'
import './PlayButton.css'
import ThemeContext from '../context/ThemeContext';

function PlayButton({ Message, children, onStart, onStop }) {
 
  const [playing,setPlaying] = useState(true);
  function clickHandler(e) {
    e.stopPropagation()
    if (playing) onStart()
      else onStop();
      setPlaying(!playing);
    }

  return (
    <button onClick={clickHandler}>{children} : {playing ? '🔈' : '🔊' }</button>
  )
}

export default PlayButton
