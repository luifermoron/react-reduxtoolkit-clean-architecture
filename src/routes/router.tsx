import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from "../pages/home/App";
import ReducerContext from "../pages/reducercontext/ReducerContext";

const RouterApp: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App test={3} testTwo={"test two"}/>} />
			<Route path="/reducercontext" element={<ReducerContext/>} />
		</Routes>
	</BrowserRouter>
);

export default RouterApp;