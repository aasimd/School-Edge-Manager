/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	teachers: [],
	error: null,
	status: "idle"
};

export const fetchTeachers = createAsyncThunk(
	`teachers/fetchTeachers`,
	async () => {
		const response = await axios.get(
			"https://schoolmanagement.aasimd.repl.co/teachers"
		);
		console.log(response.data);
		return response.data.data;
	}
);

export const addTeacher = createAsyncThunk(
	`teachers/addTeacher`,
	async (newTeacher) => {
		const response = await axios.post(
			`https://schoolmanagement.aasimd.repl.co/teachers`,
			newTeacher
		);
		console.log(response.data);
		return response.data.data;
	}
);

export const editTeacher = createAsyncThunk(
	`teachers/editTeacher`,
	async ({ newTeacherDetails, teacherId }) => {
		const response = await axios.put(
			`https://schoolmanagement.aasimd.repl.co/teachers/${teacherId}`,
			newTeacherDetails
		);
		console.log(response.data);
		return response.data.data;
	}
);

export const deleteTeacher = createAsyncThunk(
	`teachers/deleteTeacher`,
	async ({ teacherId }) => {
		const response = await axios.delete(
			`https://schoolmanagement.aasimd.repl.co/teachers/${teacherId}`
		);
		console.log(response.data);
		return response.data.data;
	}
);

export const teachersSlice = createSlice({
	name: "teachers",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchTeachers.pending]: (state, action) => {
			state.status = "loading";
		},
		[fetchTeachers.fulfilled]: (state, action) => {
			state.status = "success";
			state.teachers = action.payload;
		},
		[fetchTeachers.rejected]: (state, action) => {
			state.status = "error";
			console.error(action.error);
			state.error = action.error.message;
		},
		[addTeacher.pending]: (state, action) => {
			state.status = "loading";
		},
		[addTeacher.fulfilled]: (state, action) => {
			state.status = "success";
			state.teachers.push(action.payload);
		},
		[addTeacher.rejected]: (state, action) => {
			state.status = "error";
			console.error(action.error);
			state.error = action.error.message;
		},
		[editTeacher.pending]: (state, action) => {
			state.status = "loading";
		},
		[editTeacher.fulfilled]: (state, action) => {
			state.status = "success";
			const index = state.teachers.findIndex(
				(teacher) => teacher._id === action.payload._id
			);
			state.teachers[index] = action.payload;
		},
		[editTeacher.rejected]: (state, action) => {
			state.status = "error";
			console.error(action.error);
			state.error = action.error.message;
		},
		[deleteTeacher.pending]: (state, action) => {
			state.status = "loading";
		},
		[deleteTeacher.fulfilled]: (state, action) => {
			state.status = "success";
			state.teachers = state.teachers.filter(
				(teacher) => teacher._id !== action.payload._id
			);
		},
		[deleteTeacher.rejected]: (state, action) => {
			state.status = "error";
			console.error(action.error);
			state.error = action.error.message;
		}
	}
});
