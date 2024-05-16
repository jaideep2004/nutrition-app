import React, { useEffect } from "react";
import "./main.css";
import Main2 from "./Main2";
import Main3 from "./Main3";
import LatestBlogs from "./LatestBlogs";
import Services from "../Services/Services";
import About from "../About/About";
import "../Header/responsive.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "../Testimonials/Testimonials";
import Podcast from "../Podcast/Podcast";
import NumberPatients from "./NumberPatients";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
	const videos = [
		{
			src: "./images/v1.mp4",
			label: "Gained Relief from High Blood Pressure and High Blood Sugar",
		},
		{
			src: "./images/v2.mp4",
			label: "Gained Relief from High Blood Pressure and High Blood Sugar ",
		},
		{
			src: "./images/v3.mp4",
			label: "Gained Relief from Thyroid and Bloating ",
		},
		{
			src: "./images/v4.mp4",
			label: "Gained Relief from Lack of Energy and Obesity",
		},
		{
			src: "./images/v5.mp4",
			label: "Gained Relief from Stomach problem and reduction in weight",
		},
		{
			src: "./images/v6.mp4",
			label: "Gained Relief from Obesity ",
		},
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
						<div>
							Ready to Address Weight , Tackle Metabolic Challenges, and Boost
							Confidence?
						</div>
						<div>Let's Uncover Your Healthiest Self!</div>
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
			<Main2 />
			<Services />

			<Podcast />
			<Main3 />
			<NumberPatients />
			<Testimonials videos={videos} />
			<LatestBlogs />
			{/* <DietPlans/>			 */}
		</div>
	);
};

export default Main;
