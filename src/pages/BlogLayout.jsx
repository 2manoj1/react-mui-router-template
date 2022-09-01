import { Button, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const BlogLayout = () => {
	return (
		<>
			<Typography>Blog Page</Typography>
			<Outlet />
		</>
	);
};

export default BlogLayout;
