import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Signup from './components/SignUp';
import BrowseTalent from './screens/BrowseTalent';
import ResumeBuilder from './screens/ResumeBuilder';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/browse" element={<BrowseTalent/>} />
          <Route path="/resumebuilder" element={<ResumeBuilder/>} />

        </Routes>
      </div>
    
  );
}

export default App;
