import './App.css';
import NavBar from './components/NavBar';
import InfoLarge from './components/InfoLarge';
import Reviews from './components/Reviews';
import AverageRating from './components/AverageRating';
import Sentiment from './components/Sentiment';

function App() {
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
