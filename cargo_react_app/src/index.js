import React from 'react';
import ReactDOM from 'react-dom/client';
import './1-header.css';
import './1-body.css';
import './0-footer.css';
import './2-body.css';
import './2-header.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
		</BrowserRouter>
);

