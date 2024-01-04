import React from 'react'
import PlayButton from './PlayButton';
import Video from './Video';
import useVideoHook from '../hooks/VideoHook';

function VideoList({editVideos}) {
 const videos = useVideoHook()
  return (
    <>
     {videos.map(video =>
    <Video
      key={video.id}
      title={video.title}
      Channel={video.Channel}
      Views={video.Views}
      time={video.time}
      verifiedData={video.verifiedData}
      id={video.id}
      editVideos={editVideos}
    >
      <PlayButton Message={"Hey Play Button Clicked"} onStart={() => console.log("Start",video.title)} onStop={() => console.log("Stop",video.title)}>{video.title}</PlayButton>
    </Video>
  )} 
    </>
  )
}

export default VideoList
