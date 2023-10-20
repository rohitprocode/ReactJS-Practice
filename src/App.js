import './App.css';
import Video from './components/Video';

const obj={
  title:'Wordpress Developer',
  Channel:'rohitech',
  Views:'1M',
  time:'6 months ago',
  verifiedData: true
}

function App() {
  return (
    <div className="App">
      {/* <h1>Videos</h1> */}
      <Video {...obj} ></Video>
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
      verifiedData={true} 
      />

    </div>
  );
}

export default App;
