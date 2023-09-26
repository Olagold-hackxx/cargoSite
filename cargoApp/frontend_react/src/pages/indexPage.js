import { Link } from "react-router-dom";
import LoginModal from "../components/authComponents/loginModal";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import PageHeader from "../components/header/header";

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
		function run(interval, frames) {
			var int = 1;

			function func() {
				let img = document.getElementById(`img${int}`);
				if(int === frames) {
					int = 1;
				}
				else {
					int++;
				}
				img.id = `img${int}`;

			}

			window.setInterval(func, interval);
		}

		run(10000, 3);
  return (
		<>
		<PageHeader/>
		<div className="bodycontainer2">
				<div className="bodycontainer">
					<div className="pagebkg" id="img1">
						<span>
							<p><strong>JayCargo</strong> offers amazing air and ship cargo services</p>
							<p>Let help you deliver your goods and packages</p>
							<Link to="/home"> <Button className="pgstart">Learn More </Button></Link>
						</span>
					</div>
					<Card className="pagedetails shadow">
						<Card.Header className="pgheader">
							<div className="shadow pgdiv quotediv" >
								<div className="quote" ><span><h3 className="text-break fs-4">Get your goods and packages delivered</h3>
								</span></div>
								<p className="text-wrap">
                <Button className="quotebutton" onClick={() => {handleShow(); handleRefname("get a quote")}}>Get a quote </Button> <LoginModal refname={refname} show={show} handler={() => {handleClose(); handleRefname();}}/></p>
							</div>
							<div className="shadow pgdiv" id="lowerdiv">
							<div className="quote" ><span><h3 className="text-break fs-4">Book a call with our agents</h3></span></div>
								<p className="text-wrap"><Button className="schedulebutton" onClick={() => {handleShow(); handleRefname("book a call");}}>Book</Button> <LoginModal refname={refname} show={show} handler={() => {handleClose(); handleRefname();}}/> </p>
							</div>
							</Card.Header>
							<Card.Body className="cardbody" >
							<div className="shadow formstyle" id="trackingdiv">
								<h3 className=" text-break fs-4">Track your shipments</h3>
							<form><input className="tracking" placeholder="Tracking id"/></form>
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
		</>
  );
}
export default Page;

