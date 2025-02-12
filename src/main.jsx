import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CarritoApp } from './CarritoApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CarritoApp />
    </StrictMode>
  </BrowserRouter>
)