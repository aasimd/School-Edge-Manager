/** @format */

import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

export const Root = () => {
	return (
		<div>
			<header>
				<div>
					Source Code:{" "}
					<a
						href="https://github.com/aasimd/School-Edge-Manager"
						target="_blank"
					>
						Github
					</a>
				</div>
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
