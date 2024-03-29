

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./admin1.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

const LatestBlogs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [blogPosts, setBlogPosts] = useState([]);

  // Function to fetch latest blog posts from the API
  const fetchLatestBlogPosts = async () => {
    try {
      const response = await axios.get("https://nutrition-app-zyc5.onrender.com/api/latest-blogposts");
      setBlogPosts(response.data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  // Function to fetch latest blog posts periodically
  useEffect(() => {
    // Fetch initial blog posts when component mounts
    fetchLatestBlogPosts();

    // Set up interval to fetch blog posts periodically
    const intervalId = setInterval(() => {
      fetchLatestBlogPosts();
    }, 500); // Fetch every 1 minute (adjust interval as needed)

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='adminwrapper' id='blog'>
      <ToastContainer />

      <div className='latestblogs'>
        <div className='latesthead'>
          <h2 data-aos='fade-right' data-aos-duration='500'>Latest Blogs</h2>
        </div>
        <div className='latestcon'>
          {blogPosts.map((post) => (
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 60)}...</p>
              <Link to={`/blog/${post._id}`}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
