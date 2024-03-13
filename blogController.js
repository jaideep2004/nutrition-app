// blogController.js
const BlogPost = require('./models/BlogPost');
const Comment = require('./models/Comment');

const getLatestBlogPosts = async () => {
  try {
    const blogPosts = await BlogPost.find().sort({ createdAt: -1 }).limit(5);
    return blogPosts;
  } catch (error) {
    console.error('Error fetching latest blog posts:', error);
    throw error;
  }
};


const getBlogPostById = async (blogPostId) => {
    try {
      const blogPost = await BlogPost.findById(blogPostId);
  
      if (!blogPost) {
        throw new Error('Blog post not found');
      }
  
      return blogPost;
    } catch (error) {
      console.error('Error fetching blog post by ID:', error);
      throw error;
    }
  };

const addCommentToBlogPost = async (blogPostId, commentData) => {
  try {
    const blogPost = await BlogPost.findById(blogPostId);

    if (!blogPost) {
      throw new Error('Blog post not found');
    }

    const newComment = new Comment(commentData);
    await newComment.save();

    blogPost.comments.push(newComment);
    await blogPost.save();

    return newComment;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};



const createBlogPost = async (blogPostData) => {
  try {
    const newBlogPost = new BlogPost(blogPostData);
    await newBlogPost.save();
    return newBlogPost;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

const updateBlogPost = async (blogPostId, updatedData) => {
  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(blogPostId, updatedData, { new: true });

    if (!updatedBlogPost) {
      throw new Error('Blog post not found');
    }

    return updatedBlogPost;
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

const deleteBlogPost = async (blogPostId) => {
  try {
    const deletedBlogPost = await BlogPost.findByIdAndDelete(blogPostId);

    if (!deletedBlogPost) {
      throw new Error('Blog post not found');
    }

    return deletedBlogPost;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

module.exports = {
    getLatestBlogPosts,
    getBlogPostById,
  addCommentToBlogPost,
 
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  // Add other functions as needed.
};
