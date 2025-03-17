import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobListings from './pages/JobListings';
import CreateJob from './pages/CreateJob';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobListings />} />
        <Route path="/create-job" element={<CreateJob />} />
      </Routes>
    </Router>
  );
}

export default App;
