import React from "react";
import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


const Main2 = () => {

 
	

	

	
	
	return (
		<div>
			<div className='main2wrapper'>
				<div className='main2card' data-aos="fade-up"
     data-aos-duration="500">
					<i
						class='fa-solid fa-capsules fa-2xl'
						></i>
					Feel tired, digestive issues, or chronic pain? Prioritize staff
					wellbeing for your organization. Let's tackle your challenges
					together—reach out to see how I can help.
				</div>
				<div className='main2card' data-aos="fade-up"
     data-aos-duration="600">
					<i
						class='fa-solid fa-child-reaching fa-2xl'
						></i>
					Shift focus beyond the physical. Despite a healthy diet, fatigue
					persists. Understanding energy influences is key. Take control of your
					health—act consciously.
				</div>

				<div className='main2card' data-aos="fade-up"
     data-aos-duration="700">
					<i
						class='fa-solid fa-user-doctor fa-2xl'
						></i>
					Nutritional therapists consider each individual to be unique and
					recommend personalised nutrition and lifestyle programmes rather than
					a ‘one size fits all’ approach…
				</div>
			</div>
		</div>
	);
};

export default Main2;
