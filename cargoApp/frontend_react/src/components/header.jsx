import { Navbar, NavbarBrand, Container } from 'react-bootstrap' ;
import MenuDropdown from "./menuDropdown";
import MenuPages from "./menuPages";

export default function PageHeader () {

	return (
		<div>
		<header>
				<Navbar className="navbar  navheader">
						<Container fluid>
						<NavbarBrand><div className="logo">JayCargo</div></NavbarBrand>
						<MenuDropdown />
						<MenuPages />
						</Container>
				</Navbar>
		</header>
		</div>
	);
}