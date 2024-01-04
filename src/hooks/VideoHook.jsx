import { useContext } from 'react'
import VideoContext from '../context/VideoContext'

function useVideoHook(){
    return useContext(VideoContext)
}

export default useVideoHook