import Main from './Main';
import { Navbar, NavbarBrand, Container } from 'react-bootstrap' ;
import MenuDropdown from "./components/menuDropdown";
import MenuPages from "./components/menuPages";

function App () {
  return (
	<div>
				<Navbar className="navbar  navheader">
						<Container fluid>
						<NavbarBrand><div className="logo">J&K</div></NavbarBrand>
						<MenuDropdown />
						<MenuPages />
						</Container>
				</Navbar>
		<Main/>
	</div>
  );
}

export default App;
