import './App.css';
import NavBar from './components/NavBar';
import InfoSmall from './components/InfoSmall';
import InfoLarge from './components/InfoLarge';
import dataArr from "./data"
import CollectedData from './components/CollectedData';
import Reviews from './components/Reviews';
import AverageRating from './components/AverageRating';
import Sentiment from './components/Sentiment';

const data = dataArr.map((ele, idx) =>{
  return (
    <CollectedData key={idx} {...ele}/>
  )
})

function App() {
  console.log(data[0])
  return (
    <>
      <div id="FrontPage">
        <NavBar/>
        <InfoLarge/>
        <div id="SmallContainer">
          <Reviews></Reviews>
          <AverageRating></AverageRating>
          <Sentiment></Sentiment>
        </div>
      </div>
    </>
  );
}

export default App;
