import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import  'react-bootstrap/dist/react-bootstrap';
import './components/footer/footer.css';
import './styles/body.css'
import './styles/common.css';
import './components/header/header.css';
import './styles/responsiveness.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 <App />
		</BrowserRouter>
);

