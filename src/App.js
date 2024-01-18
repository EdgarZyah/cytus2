import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Adjust the import paths based on the actual file structure
const Home = lazy(() => import('./pages/views/Home'));
const Profile = lazy(() => import('./pages/views/Profile'));
const Characters = lazy(() => import('./pages/views/Characters'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Use 'element' prop to specify the component */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
