/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "./src/pages/Students/StudentsSlice";
import { teachersSlice } from "./src/pages/Teachers/TeachersSlice";
import classSlice from "./src/pages/Class/ClassSlice";

export default configureStore({
	reducer: {
		students: studentsSlice.reducer,
		teachers: teachersSlice.reducer,
		class: classSlice.reducer
	}
});
