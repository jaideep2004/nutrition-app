import React from "react";
import "./services.css";
import '../Header/responsive.css'

const Services = () => {
	return (
		<div className='servicewrapper'>
			<div className='service1'>
				<div className='serviceleft'>
					<h1>Our Services</h1>
					<div className='service'>
						<i class='fa-solid fa-utensils fa-xl'></i>
						Tailored meal plans based on your dietary preferences, lifestyle,
						and health objectives
					</div>
					<div className='service'>
						<i class='fa-solid fa-weight-scale fa-xl'></i>
						Customized weight loss or gain strategies that prioritize
						sustainable, long-term results.
					</div>
					<div className='service'>
						<i class='fa-solid fa-phone fa-xl'></i>
						One-on-one consultations to discuss your health history, current
						habits, and goals.
					</div>
					<div className='service'>
						<i class='fa-solid fa-heart fa-xl'></i>
						Personalized approaches for conditions such as diabetes, heart
						health, and more.
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
