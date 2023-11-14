import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Video from './components/Video';
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
      {/* <Video {...obj} ></Video>
      <Video 
      title={"React Js Tutorial"} 
      Channel={'rohitprocode'} 
      Views={'149K'} 
      time={"4 months ago"}
      verifiedData={true} 
      />
      <Video 
      title={"Node Js Tutorial"} 
      Channel={'rohitprocode'} 
      Views={'849K'} 
      time={"5 months ago"}
      verifiedData={false} 
      />
      <Video 
      title={"Mongo DB Tutorial"} 
      Channel={'rohitprocode'} 
      Views={'49K'} 
      time={"8 months ago"}
      verifiedData={false} 
      />
      <Video 
      title={"Python Tutorial"} 
      Channel={'rohitprocode'} 
      Views={'885K'} 
      time={"11 months ago"}
      verifiedData={3} 
      /> */}
      <div style={{ clear: 'both' }} >
        {/* <PlayButton Message={"Hey Pause Button Clicked"} Action={console.log} >Pause</PlayButton> */}
      {/* <Counter/> */}
      </div>
    </div>
  );
}

export default App;
