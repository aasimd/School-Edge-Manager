/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { getActiveStyles } from "../../utils";

const NavBar = () => {
	return (
		<div>
			<div>
				<h2>School Edge</h2>
			</div>
			<ul>
				<li>
					<NavLink style={getActiveStyles} to={`/students`}>
						Students
					</NavLink>
				</li>
				<li>
					<NavLink style={getActiveStyles} to={`/teachers`}>
						Teachers
					</NavLink>
				</li>
				<li>
					<NavLink style={getActiveStyles} to={`/class`}>
						Class
					</NavLink>
				</li>
				<li>
					<NavLink style={getActiveStyles} to={`/`}>
						School
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
