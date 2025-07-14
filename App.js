import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import WeatherMap from './components/WeatherMap.js';
import WeatherHistory from './components/WeatherHistory';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/map" element={<WeatherMap />} />
        <Route path="/history" element={<WeatherHistory />} />
      </Routes>
    </div>
  );
}

export default App;
