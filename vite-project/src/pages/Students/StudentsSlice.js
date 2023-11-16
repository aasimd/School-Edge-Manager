/** @format */
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	students: [],
	status: "idle",
	error: null,
	selectedStudentId: ""
};

export const fetchStudents = createAsyncThunk(
	"students/fetchStudents",
	async () => {
		const response = await axios.get(
			"https://schoolmanagement.aasimd.repl.co/students"
		);
		return response.data.data;
	}
);

export const addStudent = createAsyncThunk(
	"students/addStudent",
	async (newStudentDetails) => {
		const response = await axios.post(
			"https://schoolmanagement.aasimd.repl.co/students",
			newStudentDetails
		);
		console.log(response.data);
		return response.data.data;
	}
);

export const editStudent = createAsyncThunk(
	"students/editStudent",
	async ({newStudentDetails, studentId}) => {
		console.log(studentId);
		const response = await axios.put(
			`https://schoolmanagement.aasimd.repl.co/students/${studentId}`,
			newStudentDetails
		);

		console.log(response.data);
		return response.data.data;
	}
);

export const deleteStudent = createAsyncThunk(
	"students/deleteStudent",
	async ({studentId}) => {
		console.log(studentId);
		const response = await axios.delete(
			`https://schoolmanagement.aasimd.repl.co/students/${studentId}`
		);

		return response.data.data;
	}
);

export const studentsSlice = createSlice({
	name: "students",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchStudents.pending]: (state, action) => {
			state.status = "loading";
		},
		[fetchStudents.fulfilled]: (state, action) => {
			state.status = "success";
			state.students = action.payload;
		},
		[fetchStudents.rejected]: (state, action) => {
			state.status = "error";
			console.error(action.error);
			state.error = action.error.message;
		},
		[addStudent.pending]: (state, action) => {
			state.status = "loading";
		},
		[addStudent.fulfilled]: (state, action) => {
			state.status = "success";
			state.students.push(action.payload);
		},
		[addStudent.rejected]: (state, action) => {
			state.status = "error";
			console.error(action.error);
			state.error = action.error.message;
		},
		[editStudent.pending]: (state, action) => {
			state.status = "loading";
		},
		[editStudent.fulfilled]: (state, action) => {
			state.status = "success";
			const updatedStudent = action.payload;
			const index = state.students.findIndex(
				({ _id }) => _id === updatedStudent._id
			);
			if (index !== -1) {
				state.students[index] = updatedStudent;
			}
		},
		[editStudent.rejected]: (state, action) => {
			state.status = "error";
			console.error(action.error);
			state.error = action.error.message;
		},
		[deleteStudent.pending]: (state, action) => {
			state.status = "loading";
		},
		[deleteStudent.fulfilled]: (state, action) => {
			state.status = "success";
			state.students = state.students.filter(
				(student) => student._id !== action.payload._id
			);
		},
		[deleteStudent.rejected]: (state, action) => {
			state.status = "error";
			console.error(action.error);
			state.error = action.error.message;
		}
	}
});
