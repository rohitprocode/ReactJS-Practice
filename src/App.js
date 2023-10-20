import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="App-header">
      <Video title={"React Js Tutorial"} Channel={'rohitprocode'} Views={'149K'} time={"4 months ago"}/>
      <Video title={"Node Js Tutorial"} Channel={'rohitprocode'} Views={'849K'} time={"5 months ago"}/>
      <Video title={"Mongo DB Tutorial"} Channel={'rohitprocode'} Views={'49K'} time={"8 months ago"}/>
    </div>
  );
}

export default App;
