import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogItem = () => {
	const { blogId } = useParams();

	useEffect(() => {
		fetch(`url/${blogId}`);
	}, [blogId]);

	return <div>BlogItem {blogId}</div>;
};

export default BlogItem;
