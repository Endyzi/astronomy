import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import UniverseExplorer from './components/UniverseExplorer';
import Planet from './components/Planet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<UniverseExplorer />} />
        <Route path="/planet" element={<Planet />} />
      </Routes>
    </Router>
  );
}

export default App;
