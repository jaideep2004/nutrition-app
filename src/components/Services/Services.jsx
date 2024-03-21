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
				<div className='serviceleft' data-aos="fade-left" data-aos-duration="550">
					<h1 data-aos="fade-down" data-aos-duration="550">Our Services</h1>
					<div className='service' >
						<i class='fa-solid fa-heartbeat fa-xl'></i>
						<p>Expert guidance for managing <span>Type 2 diabetes</span> .</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-ribbon fa-xl'></i>
						<p>Comprehensive support for <span>Cancer-related nutrition</span>.</p>
					</div>
					<div className='service' >
						<i class='fa-solid fa-bone fa-xl'></i>
						<p>Tailored nutritional plans for addressing <span>Gout</span>.</p>
					</div>
					<div className='service' >
						<i class='fa-solid fa-heart fa-xl'></i>
						<p>Holistic approach to managing <span>Fatty liver</span> through diet.</p>
					</div>
					<div className='service' >
						<i class='fa-solid fa-stethoscope fa-xl'></i>
						<p>Specialized dietary recommendations for <span>Hypertension</span> management.</p>
						
					</div>
					<div className='service' >
						<i class='fa-solid fa-weight fa-xl'></i>
						<p>Personalized strategies for tackling <span>Obesity</span> through nutrition.</p>
						
					</div>
					<div className='service' >
						<i class='fa-solid fa-venus-mars fa-xl'></i>
						<p>Guidance and support for managing <span>PCOD (Polycystic Ovarian Disease)</span> with diet.</p>
						
					</div>
					<div className='service' >
						<i class='fa-solid fa-pills fa-xl'></i>
						<p>Nutrition counseling for addressing <span>Erectile dysfunction</span>.</p>
						
					</div>
					<div className='service' >
						<i class='fa-solid fa-heart fa-xl'></i>
						<p>Dietary solutions for managing <span>Acidity</span> and <span>Bloating</span> effectively.</p>
						
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
