import './App.css';
import Video from './components/Video';

const Videos = [{
  title: 'Wordpress Developer',
  Channel: 'rohitech',
  Views: '1M',
  time: '6 months ago',
  verifiedData: false,
  id:1
},
{
  title: 'React Developer',
  Channel: 'rohitech',
  Views: '149K',
  time: '4 months ago',
  verifiedData: true,
  id:2
},
{
  title: 'Node Developer',
  Channel: 'rohitech',
  Views: '849K',
  time: '5 months ago',
  verifiedData: true,
  id:3
},
{
  title: 'Mongo DB Developer',
  Channel: 'rohitech',
  Views: '49K',
  time: '9 months ago',
  verifiedData: false,
  id:4
},
{
  title: 'Python Developer',
  Channel: 'rohitech',
  Views: '999K',
  time: '12 months ago',
  verifiedData: true,
  id:5
}]

function App() {
  return (
    <div className="App">
      {Videos.map(video =>
        <Video
          title={video.title}
          Channel={video.Channel}
          Views={video.Views}
          time={video.time}
          verifiedData={video.verifiedData}
          id={video.id}
        />
      )}
      {/* <h1>Videos</h1> */}
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

    </div>
  );
}

export default App;
