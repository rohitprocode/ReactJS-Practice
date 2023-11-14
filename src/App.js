import { useState } from 'react';
import './App.css';
import videoDB from './data/data'
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';

function App() {
  const [videos,setVideos] = useState(videoDB)

  function addVideos(video){
    setVideos(
      [...videos,
      {...video, id : videos.length+1}
    ]);
  }
  return (
    <div className="App" onClick={()=>console.log("App Clicked")} >
      <AddVideo addVideo={addVideos}></AddVideo>
      <VideoList videos={videos} ></VideoList>
      
      <div style={{ clear: 'both' }} >
      </div>
    </div>
  );
}

export default App;
