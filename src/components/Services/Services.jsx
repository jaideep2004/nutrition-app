import React from "react";
import "./services.css";
import '../Header/responsive.css'

import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='servicewrapper'>
			<div className='service1'>
				<div className='serviceleft' data-aos="fade-left">
					<h1 data-aos="fade-down">Our Services</h1>
					<div className='service' data-aos="fade-left" data-aos-duration="500">
						<i class='fa-solid fa-heartbeat fa-xl'></i>
						Expert guidance for managing Type 2 diabetes.
					</div>
					<div className='service' data-aos="fade-left" data-aos-duration="550">
						<i class='fa-solid fa-ribbon fa-xl'></i>
						Comprehensive support for cancer-related nutrition.
					</div>
					<div className='service' data-aos="fade-left" data-aos-duration="600">
						<i class='fa-solid fa-bone fa-xl'></i>
						Tailored nutritional plans for addressing gout.
					</div>
					<div className='service' data-aos="fade-left" data-aos-duration="650">
						<i class='fa-solid fa-heart fa-xl'></i>
						Holistic approach to managing fatty liver through diet.
					</div>
					<div className='service' data-aos="fade-left" data-aos-duration="700">
						<i class='fa-solid fa-stethoscope fa-xl'></i>
						Specialized dietary recommendations for hypertension management.
					</div>
					<div className='service' data-aos="fade-left" data-aos-duration="750">
						<i class='fa-solid fa-weight fa-xl'></i>
						Personalized strategies for tackling obesity through nutrition.
					</div>
					<div className='service' data-aos="fade-left" data-aos-duration="800">
						<i class='fa-solid fa-venus-mars fa-xl'></i>
						Guidance and support for managing PCOD (Polycystic Ovarian Disease) with diet.
					</div>
					<div className='service' data-aos="fade-left" data-aos-duration="850">
						<i class='fa-solid fa-pills fa-xl'></i>
						Nutrition counseling for addressing erectile dysfunction.
					</div>
					<div className='service' data-aos="fade-left" data-aos-duration="900">
						<i class='fa-solid fa-heart fa-xl'></i>
						Dietary solutions for managing acidity and bloating effectively.
					</div>
				</div>
				<div className='serviceright'>
					<img src='./images/g1.jpg' alt='' />
				</div>
			</div>
		</div>
	);
};

export default Services;
