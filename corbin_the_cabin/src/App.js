import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import AboutPage from './components/Pages/AboutPage'
import Header from './components/Header';
import Player from './components/Player'
import Card from './components/shared/Card';
import './App.css';

function App() {
  return (
    <Router>
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={        
          <Player />                              
        } />
        <Route path='/about' element={
          <AboutPage />
        } />
      </Routes>
    </div>    
    </Router>
  );
}

export default App;
