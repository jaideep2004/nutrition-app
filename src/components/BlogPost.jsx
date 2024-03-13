

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './admin.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogposts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
  }, [id]);

  const handleCommentSubmit = async () => {
    try {
      const authToken = localStorage.getItem('userAuthToken'); // Replace with your user authentication token
      await axios.post(
        `http://localhost:5000/api/blogposts/${id}/comments`,
        { text: comment },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
        }
      );

      // After submitting the comment, refetch the blog post to update the comments
      fetchBlogPost();
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  if (!post) {
    return <p>Loading...</p>;
  }
 

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className='singleblog'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      
      {/* Comment Section */}
      <div className='comments'>
        <label>Comment:</label>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Leave Your Thoughts' />
        <button onClick={handleCommentSubmit}>Submit Comment</button>
      </div>

     
    </div>
  );
};

export default BlogPost;
