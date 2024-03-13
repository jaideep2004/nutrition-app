// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());

// // Connect to MongoDB (make sure your MongoDB server is running)
// mongoose.connect('mongodb://localhost:27017/Blogs', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Create a BlogPost model
// const BlogPost = mongoose.model('BlogPost', {
//   title: String,
//   content: String,
// });

// app.use(bodyParser.json());

// app.get('/', async (req, res) => {
   
//     res.json("hello");
//   });

// // API endpoint to get all blog posts
// app.get('/api/blogposts', async (req, res) => {
//   const blogPosts = await BlogPost.find();
//   res.json(blogPosts);
// });

// // API endpoint to create a new blog post
// app.post('/api/blogposts', async (req, res) => {
//   const { title, content } = req.body;
//   const newBlogPost = new BlogPost({ title, content });
  
//   try {
//     await newBlogPost.save();
//     res.json(newBlogPost);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });


// // Delete a blog post
// app.delete('/api/blogposts/:id', async (req, res) => {
//     const postId = req.params.id;
  
//     try {
//       const deletedPost = await BlogPost.findByIdAndDelete(postId);
  
//       if (!deletedPost) {
//         return res.status(404).json({ message: 'Post not found' });
//       }
  
//       res.json(deletedPost);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });






// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const { getLatestBlogPosts, addCommentToBlogPost, addLikeToBlogPost } = require('./blogController');
// // const BlogPost = require('./models/BlogPost');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/Blogs', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // const BlogPost = mongoose.model('BlogPost', {
// //   title: String,
// //   content: String,
// // });

// app.get('/', async (req, res) => {
//   res.json("hello");
// });

// // API endpoint to get all blog posts
// app.get('/api/blogposts', async (req, res) => {
//   const blogPosts = await BlogPost.find();
//   res.json(blogPosts);
// });

// // API endpoint to create a new blog post
// app.post('/api/blogposts', async (req, res) => {
//   const { title, content } = req.body;
//   const newBlogPost = new BlogPost({ title, content });

//   try {
//     await newBlogPost.save();
//     res.json(newBlogPost);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // API endpoint to get a specific blog post by ID
// app.get('/api/blogposts/:id', async (req, res) => {
//   const postId = req.params.id;

//   try {
//     const blogPost = await BlogPost.findById(postId);

//     if (!blogPost) {
//       return res.status(404).json({ message: 'Blog post not found' });
//     }

//     res.json(blogPost);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Delete a blog post
// app.delete('/api/blogposts/:id', async (req, res) => {
//   const postId = req.params.id;

//   try {
//     const deletedPost = await BlogPost.findByIdAndDelete(postId);

//     if (!deletedPost) {
//       return res.status(404).json({ message: 'Post not found' });
//     }

//     res.json(deletedPost);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });



// // API endpoint to get the latest blog posts
// app.get('/api/latest-blogposts', async (req, res) => {
//     try {
//       const latestBlogPosts = await getLatestBlogPosts();
//       res.json(latestBlogPosts);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
//   // API endpoint to add a comment to a blog post
//   app.post('/api/blogposts/:id/comments', async (req, res) => {
//     const blogPostId = req.params.id;
//     const commentData = req.body;
  
//     try {
//       const newComment = await addCommentToBlogPost(blogPostId, commentData);
//       res.json(newComment);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
//   // API endpoint to add a like to a blog post
//   app.post('/api/blogposts/:id/like', async (req, res) => {
//     const blogPostId = req.params.id;
  
//     try {
//       const newLikeCount = await addLikeToBlogPost(blogPostId);
//       res.json({ likes: newLikeCount });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getLatestBlogPosts,getBlogPostById, addCommentToBlogPost, addLikeToBlogPost, createBlogPost, updateBlogPost, deleteBlogPost } = require('./blogController');
const BlogPost = require('./models/BlogPost'); // Include the BlogPost model
const Comment = require('./models/Comment'); // Include the Comment model

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Blogs', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// API endpoint to get the latest blog posts
app.get('/api/latest-blogposts', async (req, res) => {
  try {
    const latestBlogPosts = await getLatestBlogPosts();
    res.json(latestBlogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/blogposts/:id', async (req, res) => {
    const blogPostId = req.params.id;
  
    try {
      const blogPost = await getBlogPostById(blogPostId);
  
      res.json(blogPost);
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: 'Blog post not found' });
    }
  });

// API endpoint to add a comment to a blog post
app.post('/api/blogposts/:id/comments', async (req, res) => {
  const blogPostId = req.params.id;
  const commentData = req.body;

  try {
    const newComment = await addCommentToBlogPost(blogPostId, commentData);
    res.json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


// API endpoint to create a new blog post
app.post('/api/blogposts', async (req, res) => {
  const { title, content } = req.body;

  try {
    const newBlogPost = await createBlogPost({ title, content });
    res.json(newBlogPost);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint to update a blog post
app.put('/api/blogposts/:id', async (req, res) => {
  const blogPostId = req.params.id;
  const { title, content } = req.body;

  try {
    const updatedBlogPost = await updateBlogPost(blogPostId, { title, content });
    res.json(updatedBlogPost);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint to delete a blog post
app.delete('/api/blogposts/:id', async (req, res) => {
  const blogPostId = req.params.id;

  try {
    const deletedBlogPost = await deleteBlogPost(blogPostId);
    res.json(deletedBlogPost);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// ... (other routes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

