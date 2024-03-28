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
			
			

			<div className='about2'>
			
				<div className='aboutleft'>
				<div className='bgmain2'></div>
					<img src='./images/pic1.jpeg' alt='' />
					<i class='fa-solid fa-carrot fa-2xl'></i>
				</div>
				<div className='aboutright'>
					<div className='aboutcon' data-aos='fade-left' data-aos-duration='500'>
						<div className='abouthead'>
							<h1 data-aos='fade-up' data-aos-duration='500'>
								About Me
							</h1>
						</div>
						<p>
							<span>Indian - LCHF</span> Nutrition Coach
							<br />
							<span>DLIFE.IN </span>( India's Only LCHF Community) <br />
							Practicing Health & Nutrition (LCHF) Coach –
							<span> Since 2019.</span>
							<br />
							<br />
							<span>2000+ Clients</span> (personalized Coaching) – spread all
							across India & Globe.
							<br />
							LCHF Nutrition, Sports Nutritionist, Author, Coach, Motivator.
							<br />
							<br />
							<span>22 Years</span> of EDUCATIONAL Experience <br />
							Came to Wellness space to correct his own Health <br />
							6+ Years of Experience in Wellness Space <br />
							<span>2000+</span> Clients Served
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
