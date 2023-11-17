/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGender, selectStandard } from "../../pages/Class/ClassSlice";

const ClassFilters = () => {
	const standards = [6, 7, 8, 9, 10];
	const dispatch = useDispatch();
	const { selectedGender, selectedStandard } = useSelector(
		(state) => state.class
	);
	return (
		<div>
			<div>
				<label htmlFor="class-standard">
					Standard:
					<select
						name="class-standard"
						id="class-standard"
						onChange={(event) => {
							dispatch(selectStandard(Number(event.target.value)));
						}}
					>
						<option value={0} selected={selectedStandard === 0}>
							All
						</option>
						{standards.map((e) => (
							<option value={e} selected={selectedStandard === e}>
								{e}
							</option>
						))}
					</select>
				</label>
			</div>
			<div>
				<label htmlFor="class-gender">
					Gender:{" "}
					<select
						name="class-gender"
						id="class-gender"
						onChange={(event) => {
							dispatch(selectGender(event.target.value));
						}}
					>
						<option value="0" selected={selectedGender === "0"}>
							All
						</option>
						<option value="Male" selected={selectedGender === "Male"}>
							Male
						</option>
						<option value="Female" selected={selectedGender === "Female"}>
							Female
						</option>
					</select>
				</label>
			</div>
		</div>
	);
};

export default ClassFilters;
