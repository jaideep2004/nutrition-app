

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./admin.css";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
	const [image, setImage] = useState(null);
	const [blogPosts, setBlogPosts] = useState([]);

	useEffect(() => {
    // Fetch initial blog posts when component mounts
    fetchBlogPosts();

    // Set up interval to fetch blog posts periodically
    const intervalId = setInterval(() => {
      fetchBlogPosts();
    }, 300); // Fetch every 1 minute (adjust interval as needed)

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

    const fetchBlogPosts = async () => {
        try {
            const response = await axios.get(
                "https://nutrition-app-zyc5.onrender.com/api/latest-blogposts"
            );
            setBlogPosts(response.data);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
        }
	};
	

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Optional: Display image preview
    const reader = new FileReader();
    reader.onload = (event) => {
      document.getElementById('image-preview').src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleCreateBlogPost = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    try {
      const authToken = localStorage.getItem('adminAuthToken');
      await axios.post('https://nutrition-app-zyc5.onrender.com/api/blogposts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${authToken}`,
        },
      });

      // Reset input fields and image preview
      setTitle('');
      setContent('');
      setImage(null);
      document.getElementById('image-preview').src = ''; // Clear image preview
		// Display success message
		toast.success("Blog post created successfully", { position: "top-right" });
    //   alert('Blog post created successfully');
    } catch (error) {
      console.error('Error creating blog post:', error);
      // Display error message
		//   alert('Error creating blog post');
		toast.error("Failed to create blog post", { position: "top-right" });
    }
	};
	

	const handleDeleteBlogPost = async (blogPostId) => {
        try {
            const authToken = localStorage.getItem("adminAuthToken");
            const response = await axios.delete(
                `https://nutrition-app-zyc5.onrender.com/api/blogposts/${blogPostId}`,
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
                toast.success("Blog post Deleted Successfully!", { position: "bottom-right" });
            } else {
                console.error("Failed to delete blog post");
            }
        } catch (error) {
            console.error("Error deleting blog post:", error);
        }
	};


  return (
    <div className='adminwrapper'>
     <ToastContainer />
            {/* <div className="bloghead">
                <h1>
                    Blogs
                </h1>
                
            </div> */}
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
          {/* Input for image upload */}
          <input type="file" onChange={handleImageChange} accept="image/*" className="inputfile" />
          {/* Image preview */}
          {image && (
            <img id="image-preview" src="" alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          )}
          <button onClick={handleCreateBlogPost}>Create Blog</button>
        </div>
      </div>
	  <div className="latestblogs">
                <div className="latesthead">
                    {" "}
                    <h2>Latest Blogs</h2>
                </div>
                <div className="latestcon">
                    {blogPosts.map((post) => (
                        <div key={post._id}>
                            <h3>{post.title}</h3>
                            <p>{post.content.substring(0, 10)}...</p>
                            <Link to={`/blog/${post._id}`}>Read More</Link>
                            <button onClick={() => handleDeleteBlogPost(post._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
		  
    </div>
  );
};

export default AdminDashboard;

