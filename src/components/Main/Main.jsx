import React, { useEffect } from "react";
import "./main.css";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import LatestBlogs from "./LatestBlogs";
import Services from "../Services/Services";
import About from "../About/About";
import "../Header/responsive.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "../Testimonials/Testimonials";
import Podcast from "../Podcast/Podcast";
import Signup from "../Signup/Signup";

const Main = () => {
	const videos = [
		{
			src: "./images/v1.mp4",
			label: "Relief from High Blood Pressure and Sugar",
		},
		{ src: "./images/v2.mp4", label: "Relief from High Blood Pressure " },
		{ src: "./images/v3.mp4", label: "Relief from Thyroid and Bloating " },
		{ src: "./images/v4.mp4", label: "Relief from Lack of Energy and Obesity" },
	];

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<div className='bgmain'></div>
			{/* main */}

			<div className='mainwrapper'>
				<div className='leftmain'>
					<div className='mcontent'>
						Ready to Shed Weight, many Metabolic problems and Gain Confidence?
						Let's Uncover Your<span> Healthiest Self </span>!
					</div>
					<i class='fa-solid fa-seedling fa-2xl'></i>
				</div>
				<div className='mainwrapbtn'>
					<a href='#about'>Know More</a>
				</div>
				<div className='wrapicon'>
					<i class='fa-solid fa-chevron-down fa-xl'></i>
					<i class='fa-solid fa-chevron-down fa-xl'></i>
					<i class='fa-solid fa-chevron-down fa-xl'></i>
				</div>
			</div>

			<About />
			<Services />
			<Main2 />

			<Podcast />
			<Main3 />

			<Testimonials videos={videos} />
			<LatestBlogs />
			{/* <Signup/> */}
		</div>
	);
};

export default Main;
