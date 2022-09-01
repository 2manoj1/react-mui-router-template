import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import BlogItem from "./pages/BlogItem";
import BlogLayout from "./pages/BlogLayout";

const NotFound = () => <div>Not found</div>;

const AppRouters = ({ children }) => {
	return (
		<BrowserRouter>
			<AppHeader />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="blogs" element={<BlogLayout />}>
					<Route index element={<Blog />} />
					<Route path=":blogId" element={<BlogItem />} />
				</Route>
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouters;
