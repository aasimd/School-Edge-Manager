/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTeacherHandler } from "../../utils";

const AddTeacherForm = ({ setShowAddTeacher }) => {
	const [newTeacher, setNewTeacher] = useState({
		name: "",
		age: 26,
		subject: "",
		gender: "Male"
	});
	const dispatch = useDispatch();

	return (
		<div>
			<h3>Add New Teacher</h3>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					addNewTeacherHandler(newTeacher, dispatch);
					setShowAddTeacher(false);
				}}
			>
				<div>
					<label htmlFor="teacher-name">
						Name:{" "}
						<input
							required
							type="text"
							value={newTeacher.name}
							onChange={(event) =>
								setNewTeacher((p) => ({ ...p, name: event.target.value }))
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="teacher-age">
						Age:{" "}
						<input
							required
							min={26}
							max={50}
							type="number"
							value={newTeacher.age}
							onChange={(event) =>
								setNewTeacher((p) => ({ ...p, age: event.target.value }))
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="teacher-gender">
						Gender:{" "}
						<label htmlFor="A-division">
							<input
								type="radio"
								value="Male"
								name="teacher-gender"
								onChange={(event) =>
									setNewTeacher((p) => ({ ...p, gender: event.target.value }))
								}
								checked={newTeacher.gender === "Male"}
							/>
							Male
						</label>
						<label htmlFor="B-division">
							<input
								type="radio"
								value="Female"
								name="teacher-gender"
								onChange={(event) =>
									setNewTeacher((p) => ({ ...p, gender: event.target.value }))
								}
								checked={newTeacher.gender === "Female"}
							/>
							Female
						</label>
					</label>
				</div>
				<div>
					<label htmlFor="teacher-subject">
						Subject:{" "}
						<input
							required
							type="text"
							value={newTeacher.subject}
							onChange={(event) =>
								setNewTeacher((p) => ({ ...p, subject: event.target.value }))
							}
						/>
					</label>
				</div>
				<div>
					<div>
						<input type="submit" value={"Add New Teacher"} />
					</div>
					<div>
						<input
							type="reset"
							value={"Discard"}
							onClick={() => setShowAddTeacher(false)}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddTeacherForm;
