import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalFonts from './fonts/font';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalFonts />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

