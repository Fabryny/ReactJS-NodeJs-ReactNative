import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  < BrowserRouter>
      <ToastContainer autoClose={3000}/>
      <NavBar/>
      <App ></App >
  </BrowserRouter>
  </>
);

