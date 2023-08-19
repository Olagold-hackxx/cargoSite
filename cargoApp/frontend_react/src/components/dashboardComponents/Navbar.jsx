import { Navbar, Container, Nav, Dropdown, Button  } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function DashboardNavbar () {

	return (
		<Navbar  expand="md">
      <Container fluid>
<Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2 logo"
          >
			JayCargo
          </Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2 toggler">
			</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" expand="">
           <Nav.Item class>
			<span >Dashboard</span>
		   </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
