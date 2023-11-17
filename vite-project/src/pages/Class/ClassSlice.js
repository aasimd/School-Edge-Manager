/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedStandard: 0,
	selectedGender: "0"
};

const classSlice = createSlice({
	name: "class",
	initialState,
	reducers: {
		selectStandard: (state, action) => {
			state.selectedStandard = action.payload;
		},
		selectGender: (state, action) => {
			state.selectedGender = action.payload;
		}
	}
});

export default classSlice;
export const { selectGender, selectStandard } = classSlice.actions;
