import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Demo from './pages/Demo';
import Result from './pages/Result';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/demo' element={<Demo/>} />
          <Route path='/result' element={<Result/>} />
        </Routes>
      </Router>
    </div>
  );
}
  
export default App;