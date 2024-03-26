import React from "react";
import "./podcast.css";
import Video from "./Video";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Podcast = () => {

	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<div className='podcastwrap'>
				<div className='podcasthead'  data-aos='fade-down'
					data-aos-duration='500'>
					<h1>Watch My Podcast</h1>
					<p>on reversal of Diabetes and Thyroid</p>
				</div>
				<div className='videowrap'>
					<Video embedId='VnKL2awwKjg' />
				</div>
			</div>
		</div>
	);
};

export default Podcast;
