import { Route } from "react-router-dom";
import AccountDashboard from "./Account";
import PriceDashboard from "./Pricing";


export default function routeDashboard () {

	const route =  [AccountDashboard, PriceDashboard]
	return (
		{route}
	);

}
