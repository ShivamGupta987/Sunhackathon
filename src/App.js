import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import JobCard from './components/JobCard';
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes> 
      <Route  path="/" element={<Home />}/>
      <Route path="/jobs" element={<JobCard />}/>
    </Routes>
  </BrowserRouter>
)

export default App;
