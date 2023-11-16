/** @format */

import React, { useState } from "react";
import { editStudentHandler } from "../../utils";
import { useDispatch } from "react-redux";
const EditStudentForm = ({ student, setShowEditStudent }) => {
	const dispatch = useDispatch();
	const [newStudent, setNewStudent] = useState({
		_id: student._id,
		name: student.name,
		age: student.age,
		grade: student.grade,
		gender: student.gender,
		class: student.class,
		division: student.division,
		attendance: student.attendance,
		marks: student.marks
	});
	return (
		<div>
			{" "}
			<h3>Edit Student Details</h3>
			<form
				onSubmit={(event) => {
                    event.preventDefault()
					editStudentHandler(newStudent, dispatch, student._id);
					setShowEditStudent(false);
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
						<select defaultValue={"A"} name="student-grade" id="student-grade">
							{["A", "B", "C", "D", "F"].map((grade) => (
								<option
									key={grade}
									selected={student.grade === grade}
									value={grade}
								>
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
						<input type="submit" value="Save" />
					</div>
					<div>
						<input
							onClick={() => setShowEditStudent(false)}
							type="reset"
							value={"Discard"}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditStudentForm;
