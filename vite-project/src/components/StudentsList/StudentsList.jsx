/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
const StudentsList = ({ students }) => {
	return (
		<div>
			<ul>
				{students.map((student) => {
					const { _id, name } = student;
					return (
						<li key={student._id}>
							<NavLink to={`/students/${_id}`}>{name}</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default StudentsList;
