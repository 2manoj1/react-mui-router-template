import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
	const navigate = useNavigate();

	const handleNavClick = (id) => {
		navigate(`/blogs/${id}`);
	};

	return (
		<div>
			<ul>
				<li>
					<Link to="1">My Blog 1</Link>
				</li>
				<li onClick={() => handleNavClick(2)}>Frontend Tech</li>
				<li onClick={() => handleNavClick(3)}>BE Tech</li>
			</ul>
		</div>
	);
};

export default Blog;
