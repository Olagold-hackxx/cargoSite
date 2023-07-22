import { Link } from "react-router-dom";
import Aircarg from './images/Aircarg.jpeg';
import LoginModal from "./components/loginModal";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";


	function Page () {
		const [show, setShow] = useState(false);
		const [refname, setRefname] = useState("make shipping easy");
		const handleShow = () => setShow(true);
		const handleClose = () => setShow(false);
		function handleRefname (name="make shipping easy") {
			if (refname === "make shipping easy") {
				setRefname(name);
			}
			else {
				setRefname(name);
			}
			return refname;
		}
  return (
		<div className="bodycontainer2">
				<div className="bodycontainer">
					<div className="pagebkg">
						<img alt="Background" src={Aircarg}/>
						<span>
							<h4>J&K Cargo</h4>
							<p>J&K Cargo offers amazing air and ship cargo services</p>
							<p>Let help you deliver your goods and packages</p>
							<Link to="/home"> <Button className="pgstart">Learn More </Button></Link>
						</span>
					</div>
					<Card className="pagedetails shadow">
						<Card.Header className="pgheader">
							<div className="shadow pgdiv quotediv" >
								<div className="quote" ><span><h3 className="text-break fs-4">Get your goods and containers delivered</h3>
								</span></div>
								<p className="text-wrap">
                <Button className="quotebutton" onClick={() => {handleShow(); handleRefname("get a quote")}}>Get a quote </Button> <LoginModal refname={refname} show={show} handler={() => {handleClose(); handleRefname();}}/></p>
							</div>
							<div className="shadow pgdiv" id="lowerdiv">
							<div className="quote" ><span><h3 className="text-break fs-4">Check available flights and ships schedules</h3></span></div>
								<p className="text-wrap"><Button className="schedulebutton" onClick={() => {handleShow(); handleRefname("check schedules");}}>Schedules</Button> <LoginModal refname={refname} show={show} handler={() => {handleClose(); handleRefname();}}/> </p>
							</div>
							</Card.Header>
							<Card.Body className="cardbody" >
							<div className="shadow formstyle" id="trackingdiv">
								<h3 className=" text-break fs-4">Track your shipments</h3>
							<form><input className="tracking" placeholder="Track your package"/></form>
								<p><Button className="trackButton" onClick={() => {handleShow(); handleRefname("track your shipments")}}>Track</Button> <LoginModal refname={refname} show={show} handler={() => {handleClose(); handleRefname();}}/></p>
							</div>
					</Card.Body>
				</Card>
				</div>
			<div className="">
			</div>
			<footer>
			</footer>
	</div>

  );
}
export default Page;

