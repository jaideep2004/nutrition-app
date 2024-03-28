import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Main2 = () => {
	return (
		
			<div className='main2wrapper'>
				<div className='main2card' data-aos='fade-up' data-aos-duration='500'>
					<i class='fa-solid fa-capsules  fa-2xl'></i>
					<p>
						Feel tired, <span>digestive issues</span> ,or{" "}
						<span>chronic pain</span> ? Prioritize staff wellbeing for your
						organization. Let's tackle your challenges together—reach out to see
						how I can help.
					</p>
				</div>
				<div className='main2card' data-aos='fade-up' data-aos-duration='600'>
					<i class='fa-solid fa-child-reaching fa-2xl'></i>
					<p>
						Shift focus beyond the physical. Despite a healthy diet,
						<span> fatigue </span>
						persists. Understanding energy influences is key. Take control of
						your health—act consciously.
					</p>
				</div>

				<div className='main2card' data-aos='fade-up' data-aos-duration='700'>
					<i class='fa-solid fa-user-doctor fa-2xl'></i>
					<p>
						Nutritional therapists consider each individual to be unique and
						recommend<span> personalised nutrition </span>and lifestyle
						programmes rather than a ‘one size fits all’ approach…
					</p>
				</div>
			</div>
		
	);
};

export default Main2;
