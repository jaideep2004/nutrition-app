import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './admin1.css';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');

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
      const authToken = localStorage.getItem('userAuthToken');
      await axios.post(
        `http://localhost:5000/api/blogposts/${id}/comments`,
        { text: comment },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // After submitting the comment, refetch the blog post to update the comments
      // fetchBlogPost();

      // Show toast notification
      toast.success('Comment submitted successfully!');
      
      // Clear the comment input
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
      // Show toast notification for error
      toast.error('Error submitting comment');
    }
  };

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="singleblog">
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      {/* Comment Section */}
      <div className="comments">
        <label>Comment:</label>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave Your Thoughts"
        />
        <button onClick={handleCommentSubmit}>Submit Comment</button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default BlogPost;