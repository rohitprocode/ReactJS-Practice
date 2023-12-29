import { useReducer, useState } from 'react';
import './App.css';
import videoDB from './data/data'
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  
  const [editableVideo,setEditableVideo] = useState(null)

  
  //videos parameter is a state

  function videosReducer(videos,action){
    switch(action.type){
      case 'ADD' : 
      return [...videos,
        { ...action.payload, id: videos.length + 1 }
        ];
        
        case 'DELETE' :
          return videos.filter(deleVideo => deleVideo.id !== action.payload)

          case 'UPDATE' :
            const index = videos.findIndex(v=>v.id===action.payload.id)
            const newVideos = [...videos]
            newVideos.splice(index,1,action.payload)
            setEditableVideo(null)
            return newVideos

        default : 
        return videos
    }
  }

  const [videos,dispatch] = useReducer(videosReducer,videoDB)

  // const [videos, setVideos] = useState(videoDB)


  function addVideos(video) {
    // dispatch({type : 'ADD' , payload:video })
    // setVideos(
    //   [...videos,
    //   { ...video, id: videos.length + 1 }
    //   ]);
  }

  function deleteVideos(id) {
    // dispatch({type : 'DELETE', payload:id})
    // setVideos(
    //   videos.filter(deleVideo => deleVideo.id !== id)
    // )
  }

  function editVideos(id){
    setEditableVideo(videos.find(editzz => editzz.id === id))
  }

  function updateVideo(video){
    // console.log(video)
    // dispatch({type : 'UPDATE', payload:video})
    // const index = videos.findIndex(v=>v.id===video.id)
    // const newVideos = [...videos]
    // newVideos.splice(index,1,video)
    // setVideos(newVideos)
  }

  return (
    <div className="App" onClick={() => console.log("App Clicked")} >
      <AddVideo dispatch={dispatch} editableVideo={editableVideo} ></AddVideo>
      <VideoList videos={videos} dispatch={dispatch} editVideos={editVideos} ></VideoList>
      <div style={{ clear: 'both' }} >
      </div>
    </div>
  );
}

export default App;
