import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./admin1.css";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

const LatestBlogs = () => {

	useEffect(() => {
		AOS.init();
	}, []);
	
	
	const [blogPosts, setBlogPosts] = useState([]);

	useEffect(() => {
		fetchBlogPosts();
	}, []);

	const fetchBlogPosts = async () => {
		try {
			const response = await axios.get(
				"http://localhost:5000/api/latest-blogposts"
			);
			setBlogPosts(response.data);
		} catch (error) {
			console.error("Error fetching blog posts:", error);
		}
	};

	
	

	return (
		<div className='adminwrapper' id="blog">
			 <ToastContainer  />
			
     
			<div className='latestblogs'>
				<div className='latesthead'>
					{" "}
					<h2 data-aos="fade-right" data-aos-duration="500">Latest Blogs</h2>
				</div>
				<div className='latestcon'>
					
						{blogPosts.map((post) => (
							<div key={post._id}>
								<h3>{post.title}</h3>
								<p>{post.content.substring(0, 30)}...</p>
								<Link to={`/blog/${post._id}`}>Read More</Link>
								
							</div>
						))}
					
				</div>
			</div>
			
		</div>
	);
};

export default LatestBlogs;
