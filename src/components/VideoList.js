import React from 'react'
import PlayButton from './PlayButton';
import Video from './Video';
function VideoList({videos}) {
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
    >
      <PlayButton Message={"Hey Play Button Clicked"} onStart={() => console.log("Start",video.title)} onStop={() => console.log("Stop",video.title)}>{video.title}</PlayButton>
    </Video>
  )} 
    </>
  )
}

export default VideoList
