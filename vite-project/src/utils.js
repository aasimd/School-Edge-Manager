/** @format */
import { addStudent, editStudent } from "./pages/Students/StudentsSlice";
import { addTeacher, editTeacher } from "./pages/Teachers/TeachersSlice";

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

export const editTeacherHandler = (newTeacher, dispatch) => {
	const newTeacherDetails = {
		_id: newTeacher._id,
		name: newTeacher?.name,
		age: Number(newTeacher?.age),
		gender: newTeacher?.gender,
		subject: newTeacher?.subject
	};
	dispatch(
		editTeacher({
			newTeacherDetails: newTeacherDetails,
			teacherId: newTeacherDetails._id
		})
	);
};

export const filterStudents = (students, selectedGender, selectedStandard) => {
	const filteredByGender =
		selectedGender !== "0"
			? [...students].filter((student) => student.gender === selectedGender)
			: students;
	const filteredByStandard =
		selectedStandard !== 0
			? [...filteredByGender].filter(
					(student) => student.class === selectedStandard
			  )
			: filteredByGender;
	return filteredByStandard;
};

export const getAvgStudentsMarks = (students) =>
	Math.floor(
		students.reduce((acc, curr) => acc + curr.marks, 0) / students.length
	);

export const getAvgStudentsAttendance = (students) =>
	Math.floor(
		students.reduce((acc, curr) => acc + curr.attendance, 0) / students.length
	);

export const getSchoolTopper = (students) =>
	students.reduce(
		(acc, curr) => (acc.marks < curr.marks ? Object.assign(acc, curr) : acc),
		{ marks: 0 }
	);
