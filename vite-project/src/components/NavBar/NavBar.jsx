/** @format */

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getActiveStyles } from "../../utils";
import "./NavBar.css";
const NavBar = () => {
	const navigate = useNavigate();
	return (
		<div className="nav-bar">
			<div>
				<h2 onClick={() => navigate("/")}>School Edge</h2>
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
