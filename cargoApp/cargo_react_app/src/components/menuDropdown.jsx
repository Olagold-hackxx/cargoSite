import MenuPopover from './menuPopover';
import { useState } from 'react';
import { Nav, Button, Offcanvas } from 'react-bootstrap';

export default function MenuDropdown () {
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	return (
		<div id="menu-dropdown">
			<div className="navbar-toggler-icon" onClick={handleShow}></div>
					<Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="mobilehome">Home</Nav>
								<Nav><MenuPopover className='mobilemenu' name='Service'></MenuPopover></Nav>
								<Nav><MenuPopover className='mobilemenu' name='Contact'></MenuPopover></Nav>
								<Nav><MenuPopover className='mobilemenu' name='About'></MenuPopover></Nav>
              </Offcanvas.Body>
            </Offcanvas>
		</div>

	);
}