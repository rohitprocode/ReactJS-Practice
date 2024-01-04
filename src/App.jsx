import { useReducer, useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./components/context/ThemeContext";
import VideoContext from "./components/context/VideoContext";
import VideoDispatchContext from "./components/context/VideoDispatchContext";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);

  const [themeMode, setThemeMode] = useState(ThemeContext);

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

  function editVideos(id) {
    setEditableVideo(videos.find((editzz) => editzz.id === id));
  }

  return (
    <ThemeContext.Provider value={themeMode}>
      <VideoContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch} >
          <div
            className={`App ${themeMode} `}
            onClick={() => console.log("App Clicked")}
          >
            <button
              onClick={() =>
                setThemeMode(themeMode === "darkMode" ? "lightMode" : "darkMode")
              }
            >
              SwitchMode
            </button>
            <AddVideo
              dispatch={dispatch}
              editableVideo={editableVideo}
            ></AddVideo>
            <VideoList editVideos={editVideos}></VideoList>
            <div style={{ clear: "both" }}></div>
          </div>
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
