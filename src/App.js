import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BackgroundGrid from './components/BackgroundGrid/BackgroundGrid';
import Header from './components/Header/Header';
import Wave from './components/Wave/Wave';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Wave />
        <BackgroundGrid />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
