import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './homepage';
import Page from './indexPage';


const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signup' element={<Page/>}></Route>
    </Routes>
  );
}

export default Main;