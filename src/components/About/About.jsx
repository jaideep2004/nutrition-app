import React from "react";
import "./about.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='aboutwrapper' id='about'>
			<div className='abouthead'>
					<h1 data-aos='fade-down' data-aos-duration='500'>
						About Me
					</h1>
				</div>

			<div className="about2">
			<div className='aboutleft'>
				<img src='./images/pic1.jpeg' alt='' />
				<i class='fa-solid fa-carrot fa-2xl'></i>
			</div>
			<div className='aboutright'>
				

				<div className='aboutcon' data-aos='fade-up' data-aos-duration='500'>
					<p>
						Indian - LCHF Nutrition Coach
						<br />
						DLIFE.IN ( India's Only LCHF Community) <br />
						Practicing Health & Nutrition (LCHF) Coach – Since 2019.
						<br />
						<br />
						2000+ Clients (personalized Coaching) – spread all across India &
						Globe.
						<br />
						LCHF Nutrition, Sports Nutritionist, Author, Coach, Motivator.
						<br />
						<br />
						22 Years of EDUCATIONAL Experience <br />
						Came to Wellness space to correct his own Health <br />
						6+ Years of Experience in Wellness Space <br />
						2000+ Clients Served
					</p>
				</div>
				</div>
				</div>
		</div>
	);
};

export default About;
