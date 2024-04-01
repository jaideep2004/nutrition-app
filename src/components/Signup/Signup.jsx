import React from "react";
import { useState } from "react";
import axios from "axios";
import "./signup.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		age: "",
		disease: "",
		address: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post(
				"https://nutrition-app-zyc5.onrender.com/api/patients",
				formData
			);
			console.log("Details added successfully");
			toast.success("Details Added Successfully!");
			// Clear the form fields
			setFormData({
				name: "",
				phone: "",
				age: "",
				disease: "",
				address: "",
			});
		} catch (error) {
			console.error("Failed to add patient", error);
			alert("Failed to add details");
		}
	};

	return (
		<div className='signwrap'>
			<ToastContainer />
			<div className='signhead'>
				<h1>Patient Signup</h1>
			</div>

			<form onSubmit={handleSubmit} className='signform'>
				<div className='signformdiv'>
					{/* <div>
						<label>Name:</label>
					</div> */}
<label>Name:</label>
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
						placeholder='Name'
					/>
				</div>
				<div className='signformdiv'>
					<label>Phone:</label>
					<input
						type='text'
						name='phone'
						value={formData.phone}
						onChange={handleChange}
						required
						placeholder='Phone No.'
					/>
				</div>
				<div className='signformdiv'>
					<label>Age:</label>
					<input
						type='number'
						name='age'
						value={formData.age}
						onChange={handleChange}
						required
						placeholder='Age'
					/>
				</div>
				<div className='signformdiv'>
					<label>Disease:</label>
					<input
						type='text'
						name='disease'
						value={formData.disease}
						onChange={handleChange}
						required
						placeholder='Name of Disease'
					/>
				</div>
				<div className='signformdiv'>
					<label>Address:</label>
					<input
						type='text'
						name='address'
						value={formData.address}
						onChange={handleChange}
						required
						placeholder='Address'
					/>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Signup;
