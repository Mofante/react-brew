import React from "react";
import GlobalStyles from "./components/styles/Global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
