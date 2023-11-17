/** @format */

import React, { useEffect } from "react";
import ClassFilters from "../../components/ClassFilters/ClassFilters";
import { filterStudents } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import StudentsList from "../../components/StudentsList/StudentsList";
import { fetchStudents } from "../Students/StudentsSlice";

const Class = () => {
	const { students, status, error } = useSelector((state) => state.students);
	const { selectedGender, selectedStandard } = useSelector(
		(state) => state.class
	);
	const dispatch = useDispatch();
	const filteredStudents = filterStudents(
		students,
		selectedGender,
		selectedStandard
	);
	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchStudents());
		}
	}, [dispatch, status]);
	if (status === "loading") return <h1>Loading...</h1>;
	if (status === "error") return <p>{error}</p>;
	return (
		<div>
			<h1>Class</h1>
			<div>
				<ClassFilters />
			</div>
			<div>
				<h3>Class of Selected Students</h3>
				{filteredStudents.length > 0 ? (
					<div>
						Total Students Found: {filteredStudents.length}
						<StudentsList students={filteredStudents} />
					</div>
				) : (
					<p>No Students Found for Selected Filters</p>
				)}
			</div>
		</div>
	);
};
export default Class;
