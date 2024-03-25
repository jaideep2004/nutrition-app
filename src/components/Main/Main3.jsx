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
					data-aos='zoom-in-up'
					data-aos-duration='500'>
					<img src='./images/a1.jpeg' alt='' />
				</div>
				<div className='main3right' data-aos='fade-left' data-aos-duration='500'>
					<h1 >
						"The food you eat can be either the safest and most powerful form of
						medicine or the slowest form of poison"
					</h1>
					<h3 >
					
						-Ann Wigmore
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Main3;
