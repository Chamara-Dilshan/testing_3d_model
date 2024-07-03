import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test_1 from './Test_1/Test_1';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test1" element={<Test_1 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
