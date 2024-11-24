import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Portfolio from './components/portfolio';
import TaskManager from './components/taskmanager';

function App() {
  // Get the basename from package.json homepage or default to ''
  const basename = process.env.PUBLIC_URL;

  return (
    <div className="App">
      {/* Navigation links */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto">
          <ul className="text-center flex justify-center items-center space-x-8">
            <li>
              <Link 
                to={`${basename}/`} 
                className="hover:text-gray-400 transition-colors duration-200 text-lg font-medium"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to={`${basename}/task-manager`} 
                className="hover:text-gray-400 transition-colors duration-200 text-lg font-medium"
              >
                Task Manager
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Routes for different pages */}
      <Routes>
        <Route path={`${basename}/`} element={<Portfolio />} />
        <Route path={`${basename}/task-manager`} element={<TaskManager />} />
        {/* Redirect for the root path */}
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;