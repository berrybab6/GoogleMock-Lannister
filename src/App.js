import './App.css';
import NavBar from './navbar.components/navbarGoogle';
import SearchBox from './Sectors/searchbox';
// import SideLogo from './Sectors/sidelogo.components';

function App() {
  return (
    <div className="App">
     <NavBar />
     {/* <SideLogo /> */}
     <SearchBox />
    </div>
  );
}

export default App;
