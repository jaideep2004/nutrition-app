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
						<div
							className='mcontent'
							data-aos='fade-right'
							data-aos-duration='1000'>
							Unlock Your Potential with Good Nutrition
						</div>
						<i class='fa-solid fa-seedling fa-2xl'></i>
					</div>

					<div className='rightmain'>
						<div className='mimg' data-aos='fade-down' data-aos-duration='500'>
							<img src='./images/p1.webp' alt='' />
						</div>
					</div>
			</div>
			<div className='topmain'>
				<Main2 />
				<Main3 />
				<Services />
				<About />
				{/* <Main4 /> */}
				<Testimonials videos={videos} />
				<LatestBlogs />
			</div>
		</div>
	);
};

export default Main;
