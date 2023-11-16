/** @format */

import React, { useEffect, useState } from "react";
import StudentsList from "../../components/StudentsList/StudentsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "./StudentsSlice";
import AddStudentForm from "../../components/AddStudentForm/AddStudentForm";

const Students = () => {
	const { students, status, error } = useSelector((state) => state.students);
	const dispatch = useDispatch();

	const [showAddStudent, setShowAddStudent] = useState(false);
	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchStudents());
		}
	}, [dispatch, status]);

	if (status === "loading") return <h1>Loading...</h1>;
	if (status === "error") return <p>{error}</p>;

	return (
		<div>
			{showAddStudent && (
				<div>
					<AddStudentForm setShowAddStudent={setShowAddStudent} />
				</div>
			)}
			<div onClick={() => showAddStudent && setShowAddStudent(false)}>
				<h1>Students</h1>
				<StudentsList students={students} />
				<div>
					<button onClick={() => setShowAddStudent(true)}>
						Add New Student
					</button>
				</div>
			</div>
		</div>
	);
};
export default Students;
