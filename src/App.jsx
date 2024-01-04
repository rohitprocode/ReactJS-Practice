import { useContext, useReducer, useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import { type } from "@testing-library/user-event/dist/type";
import ThemeContext from "./components/context/ThemeContext";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);

  function videosReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((deleVideo) => deleVideo.id !== action.payload);

      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videosReducer, videoDB);

  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  function editVideos(id) {
    setEditableVideo(videos.find((editzz) => editzz.id === id));
  }

  return (
    <div
      className={`App ${themeContext}`}
      onClick={() => console.log("App Clicked")}
    >
      <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
      <VideoList
        videos={videos}
        dispatch={dispatch}
        editVideos={editVideos}
      ></VideoList>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}

export default App;
