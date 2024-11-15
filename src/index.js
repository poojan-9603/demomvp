import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component
import './index.css'; // Import your CSS file

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>,
  document.getElementById('root')
);