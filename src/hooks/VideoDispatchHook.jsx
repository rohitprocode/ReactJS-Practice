import { useContext } from 'react'
import VideoDispatchContext from '../context/VideoDispatchContext'

function useVideoDispatchHook(){
    return useContext(VideoDispatchContext)
}

export default useVideoDispatchHook