import { Link } from "react-router-dom";


function Home () {
		return (
	<div class="bodycontainer">

				<header class="homeheader">
					<div class="menuhome">
						<div class="logo">Menu</div>
						<div class="menu-dropdown">Menu</div>
						<div class="menu-pageshome">
							<section class="menuPopover">Home<div>Hello</div></section>
							<section class="menuPopover">Services<div>Hello</div></section>
							<section class="menuPopover">About<div>Hello</div> </section>
							<section class="menuPopover">Contact<div>Hello</div></section>
						</div>
					</div>
				</header>
				<div class="background">
				<article class="intro">
				<h3>WELCOME TO JAY CARGO</h3>
				<p>Distance is not a problem. We move packages</p><p>from everywhere to anywhere</p>
				<button className="start"> <Link to="/">Get Started
	 			</Link></button>
				</article>
			</div>
			<div class="service">
				<div id="serviceImg"><img alt="Cargo" src="./images/freight.jpeg"></img></div>
			<div id="serviceText"><p><p><h2>Our Services</h2></p>Jay Cargo takes pride in delivering our clients packages efficiently. Most importantly, we provide 24/7 customer services. Sign up to enjoy a great experience with us. Our site also provides tracking API for our customers to get updated on their packages location </p>
			<ul><b>Services we offer</b>
				<li>Air Freight</li>
				<li>Ship Cargo</li>
				<li>Packages</li>
			</ul>
			</div>
			</div>
			<div class="about">
				<h2>About us</h2>
				<p>Jay Cargo is an experience logistic company that delivers goods through both ships or air cargos. Our agents are quite experience in their field</p>
			</div>
			<footer>
			</footer>
	</div>

  );
}

export default Home;
