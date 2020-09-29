import React from "react";
import { Switch, Route } from "react-router-dom";
import Job from "../pages/Job/Job";
import Login from "../pages/Login/Login";
import JobDetail from "../pages/JobDetails/JobDetail";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
	return (
		<switch>
			<Route path="/" exact component={Job} />
			<Route path="/login" exact component={Login} />
			<ProtectedRoute
				path="/detail/:id"
				exact
				render={(props) => <JobDetail name="mango" />}
			/>
			{/* <Route path="/detail" exact component={JobDetail} />  */}
			{/* <Route
				path="/detail"
				exact
				render={(props) => <JobDetail name="bro" />}
			/> */}
		</switch>
	);
};

export default Router;
