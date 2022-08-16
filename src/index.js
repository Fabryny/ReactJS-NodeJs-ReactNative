import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './components/navBar/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavBar/>
    <App />
  </>
);
