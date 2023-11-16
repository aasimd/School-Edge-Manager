/** @format */

import React from "react";
import { Outlet } from "react-router-dom";

function StudentsRoot() {
	return (
		<div>
			<Outlet />
		</div>
	);
}

export default StudentsRoot;
