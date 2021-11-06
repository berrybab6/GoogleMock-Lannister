import './App.css';

import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import TopNav from './components/TopNav/Topnav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
