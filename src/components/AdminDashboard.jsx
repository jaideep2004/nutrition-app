import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./admin.css";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const AdminDashboard = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
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

	
	const handleCreateBlogPost = async () => {
		try {
		  const authToken = localStorage.getItem('adminAuthToken');
		  const response = await axios.post(
			'http://localhost:5000/api/blogposts',
			{ title, content },
			{
			  headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${authToken}`,
			  },
			}
		  );
	
		  if (response.status === 200) {
			const newBlogPost = response.data;
			  setBlogPosts((prevPosts) => [...prevPosts, newBlogPost]);
			  toast.success('Blog post created successfully',{ position: "top-right" });
			setTitle('');
			setContent('');
			
		  } else {
			console.error('Failed to create blog post');
			toast.error('Failed to create blog post',{ position: "top-right" });
		  }
		} catch (error) {
			toast.error('Error creating blog post');
		  console.error('Error creating blog post:', error);
		  
		}
	  };

	const handleDeleteBlogPost = async (blogPostId) => {
		try {
			const authToken = localStorage.getItem("adminAuthToken");
			const response = await axios.delete(
				`http://localhost:5000/api/blogposts/${blogPostId}`,
				{
					headers: {
						Authorization: `Bearer ${authToken}`,
					},
				}
			);

			if (response.status === 200) {
				setBlogPosts((prevPosts) =>
					prevPosts.filter((post) => post._id !== blogPostId)
					
				);
				toast.success("Blog post Deleted Successfully!",{ position: "bottom-right" })
			} else {
				console.error("Failed to delete blog post");
			}
		} catch (error) {
			console.error("Error deleting blog post:", error);
		}
	};

	return (
		<div className='adminwrapper'>
			 <ToastContainer  />
			<div className='adminhead'>
				<h1>Hello <span>Admin</span></h1>
				{/* <h2>Create Blog </h2> */}
      </div>
			<div className="admincon1">
			
			<div className='admincon'>
				<label>Title:</label>
				<input
					type='text'
					value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
				/>
				<label>Content:</label>
				<textarea
					value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
				/>
				<button onClick={handleCreateBlogPost}>Create Blog </button>
      </div>
      </div>


     
			<div className='latestblogs'>
				<div className='latesthead'>
					{" "}
					<h2>Latest Blogs</h2>
				</div>
				<div className='latestcon'>
					
						{blogPosts.map((post) => (
							<div key={post._id}>
								<h3>{post.title}</h3>
								<p>{post.content.substring(0, 10)}...</p>
								<Link to={`/blog/${post._id}`}>Read More</Link>
								<button onClick={() => handleDeleteBlogPost(post._id)}>
									Delete
								</button>
							</div>
						))}
					
				</div>
			</div>
			
		</div>
	);
};

export default AdminDashboard;
