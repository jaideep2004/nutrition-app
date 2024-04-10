require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const WebSocket = require("ws"); // Import WebSocket module
const { addPatient, getAllPatients } = require("./patientController");
const {
	getLatestBlogPosts,
	getBlogPostById,
	addCommentToBlogPost,
	createBlogPost,
	updateBlogPost,
	deleteBlogPost,
} = require("./blogController");
const BlogPost = require("./models/BlogPost");
const Comment = require("./models/Comment");

// image
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
	console.log("Connected to MongoDB");
});

// Create WebSocket server
const server = app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

const wss = new WebSocket.Server({ server });

// WebSocket connection handler
wss.on("connection", (ws) => {
	console.log("Client connected");

	// WebSocket message handler
	ws.on("message", (message) => {
		console.log("Received message:", message);
	});

	// WebSocket close handler
	ws.on("close", () => {
		console.log("Client disconnected");
	});
});

// home

app.get("/", async (req, res) => {
	res.send("Server is Running");
});

// API endpoint to add a patient

app.post("/api/patients", async (req, res) => {
	const { name, phone, age, disease, address } = req.body;

	try {
		const newPatient = await addPatient({ name, phone, age, disease, address });
		res.json(newPatient);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

// API endpoint to get all patients
app.get("/api/patients", async (req, res) => {
	try {
		const patients = await getAllPatients();
		res.json(patients);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

// API endpoint to get the latest blog posts
app.get("/api/latest-blogposts", async (req, res) => {
	try {
		const latestBlogPosts = await getLatestBlogPosts();
		res.json(latestBlogPosts);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

// API endpoint to get a blog post by ID
app.get("/api/blogposts/:id", async (req, res) => {
	const blogPostId = req.params.id;

	try {
		const blogPost = await getBlogPostById(blogPostId);
		res.json(blogPost);
	} catch (error) {
		console.error(error);
		res.status(404).json({ message: "Blog post not found" });
	}
});

// API endpoint to add a comment to a blog post
app.post("/api/blogposts/:id/comments", async (req, res) => {
	const blogPostId = req.params.id;
	const commentData = req.body;

	try {
		const newComment = await addCommentToBlogPost(blogPostId, commentData);
		res.json(newComment);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

// // API endpoint to create a new blog post
// app.post('/api/blogposts', async (req, res) => {
//   const { title, content } = req.body;

//   try {
//     const newBlogPost = await createBlogPost({ title, content });
//     res.json(newBlogPost);

//     // Send a message to all WebSocket clients
//     wss.clients.forEach((client) => {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(JSON.stringify({ type: 'newBlogPost', data: newBlogPost }));
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// Multer configuration
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname); // Use the original file name
	},
});

const upload = multer({ storage: storage });

// API endpoint to create a new blog post with image upload
app.post("/api/blogposts", upload.single("image"), async (req, res) => {
	const { title, content } = req.body;
	const imageUrl = req.file ? `/uploads/${req.file.originalname}` : null; // Use original file name

	try {
		const newBlogPost = await createBlogPost({ title, content, imageUrl });
		res.json(newBlogPost);

		// Send a message to all WebSocket clients
		wss.clients.forEach((client) => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify({ type: "newBlogPost", data: newBlogPost }));
			}
		});
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

// API endpoint to update a blog post
app.put("/api/blogposts/:id", async (req, res) => {
	const blogPostId = req.params.id;
	const { title, content } = req.body;

	try {
		const updatedBlogPost = await updateBlogPost(blogPostId, {
			title,
			content,
		});
		res.json(updatedBlogPost);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

// API endpoint to delete a blog post
app.delete("/api/blogposts/:id", async (req, res) => {
	const blogPostId = req.params.id;

	try {
		const deletedBlogPost = await deleteBlogPost(blogPostId);
		res.json(deletedBlogPost);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});
