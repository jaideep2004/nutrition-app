import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Main3 = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<div className='main3wrapper'>
				<div
					className='main3left'
					data-aos='fade-right'
					data-aos-duration='500'>
					<img src='./images/n3.jpg' alt='' />
				</div>
				<div className='main3right' data-aos='fade-left' data-aos-duration='500'>
					<h1 >
						"Fuel your body with goodness! Embrace vibrant health with every bite. "
					</h1>
					
				</div>
			</div>
		</div>
	);
};

export default Main3;
