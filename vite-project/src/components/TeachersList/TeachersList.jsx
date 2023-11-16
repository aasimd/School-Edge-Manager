/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
const TeachersList = ({ teachers }) => {
	return (
		<div>
			<ul>
				{teachers.map((teacher) => {
					const { _id, name } = teacher;
					return (
						<li key={teacher._id}>
							<NavLink to={`/teachers/${_id}`}>{name}</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TeachersList;
