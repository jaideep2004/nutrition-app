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
      
			<div className='aboutleft'>
				<img src='./images/2.png' alt='' />
				<i class='fa-solid fa-carrot fa-2xl'></i>
			</div>
			<div className='aboutright'>
				<h1 data-aos='fade-down' data-aos-duration='500'>
					About Me
				</h1>
				<div className='aboutcon' data-aos='fade-up' data-aos-duration='500'>
					<p>
						I am an experienced and certified nutritionist & Lifestyle Coach
						from <span>National Skill Development Corporation (NSDC)</span> and
						linked with <span>dlife.in</span> with 8 years of practice providing
						individualized advice to my clients. I have an immense passion for
						the healing power of food and nutrients having experienced their
						effects first hand. We know the food we eat affects every cell in
						the body; it can make the difference between feeling{" "}
						<b>‘all right’</b> and feeling <b>‘great’</b>. I will show you
						alternatives and inspire you to make changes as you gain control and
						bring your body back into balance. We will work together to create a
						new lifestyle – something that works for you. My work is focused on
						the unique nutritional needs of each individual. The degree of
						biological variation between individuals is too vast to guarantee
						that the same treatment will have the same effect for everyone,
						therefore, there’s never a one-size-fits-all approach.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
