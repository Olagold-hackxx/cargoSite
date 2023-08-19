import DashboardNavbar from "./components/dashboardComponents/Navbar";
import Sidebar from "./components/dashboardComponents/Sidebar";
import './dashboard.css';
import Aircarg from './images/Aircarg.jpeg';



export default function Dashboard () {
	return (
		<div className="d-flex">
			<aside>
			<section className="body d-none d-lg-flex d-md-flex">
			<div className="sidebar">
				<Sidebar color={"white"} image={Aircarg}></Sidebar>
			</div>
			</section>
			</aside>
			<section className="header">
			<DashboardNavbar/>
			</section>
		</div>
	)
}