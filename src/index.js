import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Formulario from './Formulario';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
      <App />
      <Formulario />
      <Footer />   
       </main>
    
  </React.StrictMode>
);

reportWebVitals();
