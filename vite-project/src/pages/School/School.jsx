/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../Students/StudentsSlice";
import { fetchTeachers } from "../Teachers/TeachersSlice";
import {
	getAvgStudentsAttendance,
	getAvgStudentsMarks,
	getSchoolTopper
} from "../../utils";
const School = () => {
	const dispatch = useDispatch();
	const { status: teachersStatus } = useSelector((state) => state.teachers);
	const { status: studentsStatus, students } = useSelector(
		(state) => state.students
	);
	const totalStudents = students.length;
	const averageMarks = getAvgStudentsMarks(students);
	const averageAttendance = getAvgStudentsAttendance(students);
	const schoolTopper = getSchoolTopper(students);
	useEffect(() => {
		if (studentsStatus === "idle") {
			dispatch(fetchStudents());
		}
		if (teachersStatus === "idle") {
			dispatch(fetchTeachers());
		}
	}, [studentsStatus, teachersStatus, dispatch]);

	if (studentsStatus === "loading" || teachersStatus === "loading")
		return <h1>Loading...</h1>;
	if (studentsStatus === "error" || teachersStatus === "error")
		return <p>{error}</p>;
	return (
		<div>
			<h1>School</h1>
			<div>
				Total Students: <b>{totalStudents}</b>
				<br />
				Average Marks: <b>{averageMarks}</b>
				<br />
				Average Attendance: <b>{averageAttendance}</b>
				<br />
				School Topper: <b>{schoolTopper.name}</b>
			</div>
		</div>
	);
};

export default School;
