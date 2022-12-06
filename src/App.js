import './App.css';
import NavBar from './components/NavBar';
import InfoLarge from './components/InfoLarge';
import InfoSmall from './components/InfoSmall';

function App() {
  return (
    <>
      <div id="FrontPage">
        <NavBar/>
        <InfoLarge/>
        <div id="SmallContainer">
          <InfoSmall/>
          <InfoSmall/>
          <InfoSmall/>
        </div>
      </div>
    </>
  );
}

export default App;
