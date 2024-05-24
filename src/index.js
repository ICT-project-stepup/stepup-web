import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalFonts from './fonts/font';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>
);

