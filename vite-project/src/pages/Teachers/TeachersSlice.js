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
		}
	}
});
