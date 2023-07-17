import { Link } from "react-router-dom";
import Aircarg from './images/Aircarg.jpeg';


function Page () {
  return (

	<div class="bodycontainer2">
				<header class="pageheader">
					<div class="menu">
						<div class="logo">Menu</div>
						<div class="menu-dropdown">Menu</div>
						<div class="menu-pages">
							<div class="menuPopover">Home<div>Hello</div></div>
							<div class="menuPopover">Services<div>Hello</div></div>
							<div class="menuPopover">About<div>Hello</div></div>
							<div class="menuPopover">Contact<div>Hello</div></div>
						</div>
					</div>
				</header>
				<div class="container">
					<div class="pagebkg">
						<img alt="Background" src={Aircarg}/>
						<span>
							<p>Jay Cargo fly and ship packages to anywhere.</p>
							<p>Let help you deliver your packages</p>
							<button class="pgstart"><Link to="/signup">Learn More
								</Link> </button>
						</span>
					</div>
				<div class="pagedetails">
					<div>
						<section></section>
						</div>
					<div id="upperdiv">
						<article><input class="tracking" placeholder="Track your package"/></article>
						<p><button class="trackButton">Track</button></p>
						</div>
				</div>
				</div>
			<div class="">
			</div>
			<footer>
			</footer>
	</div>

  );
}

export default Page;
