import HomePopover from "./homePopover";
import ServicePopover from "./servicePopover";
import AboutPopover from "./aboutPopover";
import ContactPopover from "./contactPopover";
import { Accordion } from "react-bootstrap";
//import { useState, Link } from "react";

export default function MenuPopover ({name}) {

	const menupages = {
		"Service": <ServicePopover/>,
		"About": <AboutPopover />,
		"Contact": <ContactPopover/>
	}

	return (
		<div>
		<Accordion defaultActiveKey="0" >
				<Accordion.Header >
					{name}
				</Accordion.Header>
				<Accordion.Body  id="popover">
					{menupages[name]}
				</Accordion.Body>

		</Accordion>
		</div>
	);
}
