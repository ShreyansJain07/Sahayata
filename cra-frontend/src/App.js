import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';


import RootLayout from './layouts/RootLayout';

import Signup from './components/SignUp';
import BrowseTalent from './screens/BrowseTalent';
import ResumeBuilder from './screens/ResumeBuilder';
import Blog from './components/Blog';
import SpeechtoText from './components/SpeechtoText';

function App() {
  return (

      <div className="App">
        <Routes>
          <Route path="/" element={<RootLayout/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/browse" element={<BrowseTalent/>} />
          <Route path="/resumebuilder" element={<ResumeBuilder/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/speech" element={<SpeechtoText/>} />

        </Routes>
      </div>
    
  );
}

export default App;
