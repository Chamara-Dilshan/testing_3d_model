import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test_1 from './Test_1/Test_1';
import Test_2 from './Test_2/Test_2';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test1" element={<Test_1 />} />
        <Route path="/" element={<Home />} />
        <Route path="/test2" element={<Test_2/>} />
      </Routes>
    </Router>
  );
}

export default App;
