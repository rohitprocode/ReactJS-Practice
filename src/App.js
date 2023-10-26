import './App.css';
import Counter from './components/Counter';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import Videos from './data/data'

function App() {
  return (
    <div className="App" onClick={()=>console.log("App Clicked")} >
      {Videos.map(video =>
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
      <Counter/>
      </div>
    </div>
  );
}

export default App;
