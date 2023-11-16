/** @format */

import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

export const Root = () => {
	return (
		<div>
			<header>
				<nav>
					<NavBar />
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};
