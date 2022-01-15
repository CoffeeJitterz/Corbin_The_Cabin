import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import AboutPage from './components/Pages/AboutPage'
import Header from './components/Header';
import Player from './components/Player'
import './App.css';

function App() {
  return (
    <Router>
    <div className='app'>
      <Header />
      <div className='gap'>
      </div>
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
