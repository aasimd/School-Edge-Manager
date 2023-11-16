/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "./src/pages/Students/StudentsSlice";
import { teachersSlice } from "./src/pages/Teachers/TeachersSlice";

export default configureStore({
	reducer: {
		students: studentsSlice.reducer,
        teachers: teachersSlice.reducer
	}
});
