import React from 'react';
import './App.css';


import LandingPage from './components/LandingPage/landingpage';
import Registration from './components/Registration/Registration';
function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default App;
