/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "./TeachersSlice";
import TeachersList from "../../components/TeachersList/TeachersList";
import AddTeacherForm from "../../components/AddTeacherForm/AddTeacherForm";

function Teachers() {
	const { teachers, error, status } = useSelector((state) => state.teachers);
	const dispatch = useDispatch();
	const [showAddTeacher, setShowAddTeacher] = useState(false);
	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchTeachers());
		}
	}, [status, dispatch]);

	if (status === "loading") return <h1>Loading...</h1>;
	if (status === "error") return <p>{error}</p>;
	return (
		<div>
			{showAddTeacher && (
				<div>
					<AddTeacherForm setShowAddTeacher={setShowAddTeacher} />
				</div>
			)}
			<div onClick={() => showAddTeacher && setShowAddTeacher(false)}>
			<h1>Teachers</h1>
			<TeachersList teachers={teachers} />
			<div>
				<button onClick={() => setShowAddTeacher(true)}>Add New Teacher</button>
			</div>
		</div>
		</div>
	);
}

export default Teachers;
