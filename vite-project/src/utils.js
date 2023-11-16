/** @format */
import { addStudent, editStudent } from "./pages/Students/StudentsSlice";
import { addTeacher } from "./pages/Teachers/TeachersSlice";
export const getActiveStyles = ({ isActive }) =>
	isActive ? { color: "red", fontWeight: 600 } : {};

export const addNewStudentHandler = (newStudent, dispatch) => {
	const newStudentDetails = {
		name: newStudent?.name,
		age: Number(newStudent?.age),
		grade: newStudent?.grade,
		gender: newStudent?.gender,
		class: Number(newStudent?.class),
		division: newStudent?.division,
		attendance: Number(newStudent?.attendance),
		marks: Number(newStudent?.marks)
	};
	dispatch(addStudent(newStudentDetails));
};

export const editStudentHandler = (newStudent, dispatch, id) => {
	console.log(id);
	const newStudentDetails = {
		_id: newStudent._id,
		name: newStudent?.name,
		age: Number(newStudent?.age),
		grade: newStudent?.grade,
		gender: newStudent?.gender,
		class: Number(newStudent?.class),
		division: newStudent?.division,
		attendance: Number(newStudent?.attendance),
		marks: Number(newStudent?.marks)
	};
	dispatch(
		editStudent({ newStudentDetails: newStudentDetails, studentId: id })
	);
};

export const addNewTeacherHandler = (newTeacher, dispatch) => {
	const newTeacherDetails = {
		name: newTeacher?.name,
		age: Number(newTeacher?.age),
		subject: newTeacher?.subject,
		gender: newTeacher?.gender
	};
	dispatch(addTeacher(newTeacherDetails));
};
