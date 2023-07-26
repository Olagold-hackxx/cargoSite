import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import { Navbar, NavbarBrand, Container } from 'react-bootstrap' ;
import MenuDropdown from "./components/menuDropdown";
import MenuPages from "./components/menuPages";
import Home from './homepage';
import Page from './indexPage';
import LoginPage from './components/loginPage';
import SignupPage from './components/signupPage';
import Dashboard from './dashboard';

const Main = () => {
  return (
		<>
		<header>
				<Navbar className="navbar  navheader">
						<Container fluid>
						<NavbarBrand><div className="logo">JayCargo</div></NavbarBrand>
						<MenuDropdown />
						<MenuPages />
						</Container>
				</Navbar>
				</header>
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/' element={<Page/>}></Route>
			<Route path="/sign-in" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
			<Route path="/user/dasboard" element={<Dashboard />} />
    </Routes>
		</>
  );
}

export default Main;