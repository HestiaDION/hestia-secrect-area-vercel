import React from 'react';
import App from './App.jsx'
import './styles/index.css'
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root')); // Cria o root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);