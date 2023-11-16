/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Root } from "../pages/Root/Root";

const StudentsRoot = lazy(() => import("../pages/StudentsRoot/StudentsRoot"));
const Students = lazy(() => import("../pages/Students/Students"));
const TeachersRoot = lazy(() => import("../pages/TeachersRoot/TeachersRoot"));
const Teachers = lazy(() => import("../pages/Teachers/Teachers"));
const School = lazy(() => import("../pages/School/School"));
const Class = lazy(() => import("../pages/Class/Class"));
const StudentDetails = lazy(() =>
	import("../pages/StudentDetails/StudentDetails")
);
const TeacherDetails = lazy(() =>
	import("../pages/TeacherDetails/TeacherDetails")
);

const LoadingFrag = () => {
	return <h2>Loading...</h2>;
};

const ErrorElement = () => {
	return (
		<div>
			<h2>Some Error Occurred...</h2>
			<p>Check Console for more Details</p>
		</div>
	);
};

const MyBrowserRouter = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<LoadingFrag />}>
				<Root />
			</Suspense>
		),
		errorElement: <ErrorElement />,
		children: [
			{
				path: "",
				element: (
					<Suspense fallback={<LoadingFrag />}>
						<School />
					</Suspense>
				)
			},
			{
				path: "students",
				element: (
					<Suspense fallback={<LoadingFrag />}>
						<StudentsRoot />
					</Suspense>
				),
				children: [
					{
						path: "",
						element: (
							<Suspense fallback={<LoadingFrag />}>
								<Students />
							</Suspense>
						)
					},
					{
						path: "/students/:studentId",
						element: (
							<Suspense fallback={<LoadingFrag />}>
								<StudentDetails />
							</Suspense>
						)
					}
				]
			},
			{
				path: "teachers",
				element: (
					<Suspense fallback={<LoadingFrag />}>
						<TeachersRoot />
					</Suspense>
				),
				children: [
					{
						path: "",
						element: (
							<Suspense fallback={<LoadingFrag />}>
								<Teachers />
							</Suspense>
						)
					},
					{
						path: "/teachers/:teacherId",
						element: (
							<Suspense fallback={<LoadingFrag />}>
								<TeacherDetails />
							</Suspense>
						)
					}
				]
			},
			{
				path: "class",
				element: (
					<Suspense fallback={<LoadingFrag />}>
						<Class />
					</Suspense>
				)
			}
		]
	}
]);
export default MyBrowserRouter;
