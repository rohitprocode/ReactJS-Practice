import { useState } from 'react';
import './App.css';
import videoDB from './data/data'
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';

function App() {

  const [videos, setVideos] = useState(videoDB)

  const [editableVideo,setEditableVideo] = useState(null)

  function addVideos(video) {
    setVideos(
      [...videos,
      { ...video, id: videos.length + 1 }
      ]);
  }

  function deleteVideos(id) {
    setVideos(
      videos.filter(deleVideo => deleVideo.id !== id)
    )
  }

  function editVideos(id){
    setEditableVideo(videos.find(editzz => editzz.id === id))
  }

  function updateVideo(video){
    // console.log(video)
    const index = videos.findIndex(v=>v.id===video.id)
    const newVideos = [...videos]
    newVideos.splice(index,1,video)
    setVideos(newVideos)
  }

  return (
    <div className="App" onClick={() => console.log("App Clicked")} >
      <AddVideo addVideo={addVideos} editableVideo={editableVideo} updateVideo={updateVideo} ></AddVideo>
      <VideoList videos={videos} deleteVideos={deleteVideos} editVideos={editVideos} ></VideoList>

      <div style={{ clear: 'both' }} >
      </div>
    </div>
  );
}

export default App;
