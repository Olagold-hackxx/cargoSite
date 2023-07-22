import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import  'react-bootstrap/dist/react-bootstrap';
import './0-footer.css';
import './common.css';
import './header.css';
import './responsiveness.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
		</BrowserRouter>
);

