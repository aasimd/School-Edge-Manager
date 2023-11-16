/** @format */

import "./App.css";
import { RouterProvider } from "react-router-dom";
import MyBrowserRouter from "./MyRouter/MyBrowserRouter";

function App() {

	return (
		<main>
			<RouterProvider router={MyBrowserRouter} />
		</main>
	);
}

export default App;
