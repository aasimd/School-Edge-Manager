/** @format */

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditStudentForm from "../../components/EditStudentForm/EditStudentForm";
import { deleteStudent } from "../Students/StudentsSlice";

const StudentDetails = () => {
	const { studentId } = useParams();
	const { students, status, error } = useSelector((state) => state.students);
	const student = students.find((student) => student._id === studentId);
	const {
		_id,
		name,
		grade,
		attendance,
		gender,
		marks,
		class: standard,
		division,
		age
	} = student;
	const navigate = useNavigate();
	const [showEditStudent, setShowEditStudent] = useState(false);
	const dispatch = useDispatch();
	if (status === "loading") return <h1>Loading...</h1>;
	if (status === "error") return <p>{error}</p>;
	return (
		<div>
			<div>
				{showEditStudent && (
					<EditStudentForm
						student={student}
						setShowEditStudent={setShowEditStudent}
					/>
				)}
			</div>
			<div onClick={() => showEditStudent && setShowEditStudent(false)}>
				<button onClick={() => navigate(-1)}>{"< Back"}</button>
				<h1>Student Details</h1>
				<div>
					<h2>{name}</h2>
					<p>
						{" "}
						Gender: <b>{gender}</b>
						<br />
						Age: <b>{age}</b>
						<br />
						Class: <b>{standard}th</b>
						<br />
						Division: <b>{division}</b>
						<br />
						Grade: <b>{grade}</b>
						<br />
						Marks: <b>{marks}</b>
						<br />
						Attendance: <b>{attendance}</b>
						<br />
					</p>
				</div>
				<div>
					<div>
						<button onClick={() => setShowEditStudent(true)}>Edit</button>{" "}
					</div>
					<div>
						<button
							onClick={() => {
								dispatch(deleteStudent({ studentId: _id }));
								navigate(-1);
							}}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default StudentDetails;
