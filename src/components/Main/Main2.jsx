import React from "react";
import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


const Main2 = () => {

  useEffect(() => {
		AOS.init();
	}, []);
	// const [opacity, setOpacity] = useState(1);

	// useEffect(() => {
	//   const handleScroll = () => {
	//     const scrollY = window.scrollY || document.documentElement.scrollTop;
	//     const newOpacity = 1 - scrollY / 900; // Adjust the division factor as needed

	//     setOpacity(newOpacity < 0 ? 0 : newOpacity);
	//   };

	//   window.addEventListener('scroll', handleScroll);

	//   return () => {
	//     window.removeEventListener('scroll', handleScroll);
	//   };
	// }, []);

	const [scrollOpacity, setScrollOpacity] = useState(1);

	// useEffect(() => {
	//   const handleScroll = () => {
	//     const newOpacity = 1 - window.scrollY / 800; // You can adjust the division factor as needed
	//     setScrollOpacity(newOpacity < 0 ? 0 : newOpacity);
	//   };

	//   window.addEventListener('scroll', handleScroll);

	//   return () => window.removeEventListener('scroll', handleScroll);
	// }, []);
	useEffect(() => {
		const handleScroll = () => {
			const scrollThreshold = window.innerWidth < 768 ? 2000 : 900; // Adjust the threshold for mobile screens
			const newOpacity = 1 - window.scrollY / scrollThreshold;
			setScrollOpacity(newOpacity < 0 ? 0 : newOpacity);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<div>
			<div className='main2wrapper'>
				<div className='main2card' data-aos="fade-up"
     data-aos-duration="500">
					<i
						class='fa-solid fa-capsules fa-2xl'
						style={{ opacity: scrollOpacity }}></i>
					Feel tired, digestive issues, or chronic pain? Prioritize staff
					wellbeing for your organization. Let's tackle your challenges
					together—reach out to see how I can help.
				</div>
				<div className='main2card' data-aos="fade-up"
     data-aos-duration="600">
					<i
						class='fa-solid fa-child-reaching fa-2xl'
						style={{ opacity: scrollOpacity }}></i>
					Shift focus beyond the physical. Despite a healthy diet, fatigue
					persists. Understanding energy influences is key. Take control of your
					health—act consciously.
				</div>

				<div className='main2card' data-aos="fade-up"
     data-aos-duration="700">
					<i
						class='fa-solid fa-user-doctor fa-2xl'
						style={{ opacity: scrollOpacity }}></i>
					Nutritional therapists consider each individual to be unique and
					recommend personalised nutrition and lifestyle programmes rather than
					a ‘one size fits all’ approach…
				</div>
			</div>
		</div>
	);
};

export default Main2;
