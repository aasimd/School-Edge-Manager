/** @format */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EditTeacherForm from "../../components/EditTeacherForm/EditTeacherForm";
import { deleteTeacher } from "../Teachers/TeachersSlice";

const TeacherDetails = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { teacherId } = useParams();
	const { teachers, status, error } = useSelector((state) => state.teachers);
	const teacher = teachers.find((teacher) => teacher._id === teacherId);
	const { name, age, subject, gender, _id } = teacher;
	const [showTeacherEdit, setShowTeacherEdit] = useState(false);

	if (status === "loading") return <h1>Loading...</h1>;
	if (status === "error") return <p>{error}</p>;
	return (
		<div>
			{showTeacherEdit && (
				<div>
					<EditTeacherForm
						teacher={teacher}
						setShowTeacherEdit={setShowTeacherEdit}
					/>
				</div>
			)}
			<div onClick={() => showTeacherEdit && setShowTeacherEdit(false)}>
				<div>
					<button onClick={() => navigate(-1)}>{"< Back"}</button>
				</div>
				<h1>Teacher Details</h1>
				<h2>{name}</h2>
				<div>
					<p>
						Age: <b>{age}</b>
						<br />
						Subject: <b>{subject}</b>
						<br />
						Gender: <b>{gender}</b>
					</p>
				</div>
				<div>
					<div>
						<button onClick={() => setShowTeacherEdit(true)}>Edit</button>
					</div>
					<div>
						<button
							onClick={() => {
								dispatch(deleteTeacher({ teacherId: _id }));
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
export default TeacherDetails;
