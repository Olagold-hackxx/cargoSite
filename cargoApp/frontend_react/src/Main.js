import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Home from './homepage';
import Page from './indexPage';
import LoginPage from './components/loginPage';
import SignupPage from './components/signupPage';
import Dashboard from './dashboard';

const Main = () => {
  return (
		<>
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/' element={<Page/>}></Route>
			<Route path="/sign-in" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
			<Route path="/user/dashboard" element={<Dashboard />} />
    </Routes>
		</>
  );
}

export default Main;