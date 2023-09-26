import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import SimpleLayout from "./layouts/simple";
import Home from './pages/homepage';
import Page from './pages/indexPage';
import LoginPage from './components/authComponents/loginPage';
import SignupPage from './components/authComponents/signupPage';
//
import BlogPage from "./pages/BlogPage";
import UserPage from "./pages/UserPage";
import DashLoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import ProductsPage from "./pages/ProductsPage";
import DashboardAppPage from "./pages/DashboardAppPage";

export default function RoutePage() {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "user", element: <UserPage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "blog", element: <BlogPage /> },
      ],
    },
    {
      path: "login",
      element: <DashLoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "404", element: <Page404 /> },
      ],
    },
	{
	  path: "home",
	  element: <Home />
	},
	{
	  path: "index",
	  element: <Page />
	},
	{
	  path: "signin",
	  element: <LoginPage />
	},
	{
	  path: "signup",
	  element: <SignupPage />
	}
  ]);

  return routes;
}
