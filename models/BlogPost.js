// // models/BlogPost.js
// const mongoose = require('mongoose');

// const blogPostSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   comments: [
//     {
//       type: String,
//       ref: 'Comment',
//     },
//   ],
  
// }, { timestamps: true });

// const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// module.exports = BlogPost;

const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String, // Assuming the image URL will be stored as a string
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  
}, { timestamps: true });

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
