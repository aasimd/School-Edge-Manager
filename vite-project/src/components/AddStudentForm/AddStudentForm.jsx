/** @format */

import React, { useState } from "react";
import { addNewStudentHandler } from "../../utils";
import { useDispatch } from "react-redux";
const AddStudentForm = ({ setShowAddStudent }) => {
	const dispatch = useDispatch();
	const [newStudent, setNewStudent] = useState({
		name: "",
		age: 10,
		grade: "B",
		gender: "Male",
		class: 6,
		division: "A",
		attendance: 0,
		marks: 0
	});
	return (
		<div>
			{" "}
			<h3>Add New Student</h3>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					addNewStudentHandler(newStudent, dispatch);
					setShowAddStudent(false);
				}}
			>
				<div>
					<label htmlFor="student-name">
						Name:{" "}
						<input
							required
							type="text"
							value={newStudent.name}
							onChange={(event) =>
								setNewStudent((p) => ({ ...p, name: event.target.value }))
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="student-age">
						Age:{" "}
						<input
							required
							min={10}
							max={18}
							type="number"
							value={newStudent.age}
							onChange={(event) =>
								setNewStudent((p) => ({ ...p, age: event.target.value }))
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="student-class">
						Class:{" "}
						<input
							required
							min={6}
							max={10}
							type="number"
							value={newStudent.class}
							onChange={(event) =>
								setNewStudent((p) => ({ ...p, class: event.target.value }))
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="student-attendance">
						Attendance:{" "}
						<input
							required
							min={0}
							max={100}
							type="number"
							value={newStudent.attendance}
							onChange={(event) =>
								setNewStudent((p) => ({ ...p, attendance: event.target.value }))
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="student-marks">
						Marks:{" "}
						<input
							required
							min={0}
							max={100}
							type="number"
							value={newStudent.marks}
							onChange={(event) =>
								setNewStudent((p) => ({ ...p, marks: event.target.value }))
							}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="student-division">
						Division:{" "}
						<label htmlFor="A-division">
							<input
								type="radio"
								value="A"
								name="student-division"
								onChange={(event) =>
									setNewStudent((p) => ({ ...p, division: event.target.value }))
								}
								checked={newStudent.division === "A"}
							/>
							A
						</label>
						<label htmlFor="B-division">
							<input
								type="radio"
								value="B"
								name="student-division"
								onChange={(event) =>
									setNewStudent((p) => ({ ...p, division: event.target.value }))
								}
								checked={newStudent.division === "B"}
							/>
							B
						</label>
					</label>
				</div>
				<div>
					<label htmlFor="student-grade">
						{" "}
						Grade:{" "}
						<select name="student-grade" id="student-grade">
							{["A", "B", "C", "D", "F"].map((grade) => (
								<option key={grade} value={grade}>
									{grade}
								</option>
							))}
						</select>
					</label>
				</div>
				<div>
					<label htmlFor="student-gender">
						Gender:{" "}
						<label htmlFor="A-division">
							<input
								type="radio"
								value="Male"
								name="student-gender"
								onChange={(event) =>
									setNewStudent((p) => ({ ...p, gender: event.target.value }))
								}
								checked={newStudent.gender === "Male"}
							/>
							Male
						</label>
						<label htmlFor="B-division">
							<input
								type="radio"
								value="Female"
								name="student-gender"
								onChange={(event) =>
									setNewStudent((p) => ({ ...p, gender: event.target.value }))
								}
								checked={newStudent.gender === "Female"}
							/>
							Female
						</label>
					</label>
				</div>
				<div>
					<div>
						<input type="submit" value="Add Student" />
					</div>
					<div>
						<input
							onClick={() => setShowAddStudent(false)}
							type="reset"
							value={"Discard"}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddStudentForm;
