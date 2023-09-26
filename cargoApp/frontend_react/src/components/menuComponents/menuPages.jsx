import MenuPopover from "./menuPopover";


export default function MenuPages () {

	return (
		<div className="menu-pages">
			<ul  className="navbar-nav">
				<li className="nav-item home">Home</li>
				<li className="nav-item"><MenuPopover  name={"Service"} /></li>
				<li className="nav-item"><MenuPopover  name={"About"}/></li>
				<li className="nav-item"><MenuPopover  name={"Contact"}/></li>
		</ul>
		</div>
	);
}
