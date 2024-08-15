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
		<div className="pod1">
			<div className='podcastwrap'>
				<div className='podcasthead'  data-aos='fade-down'
					data-aos-duration='500'>
					<h1>Watch My Podcast</h1>
					<h3>on PCOD and Type-2 Diabetes</h3>
				</div>
				<div className='videowrap'>
				
					<Video embedId='SoUQBNCzU2A' />             
				</div>
			</div>
			<div className='podcastwrap2'>
				
				<div className='videowrap'>
					<Video embedId='VnKL2awwKjg' />             
					
				</div>
				<div className='podcasthead'  data-aos='fade-down'
					data-aos-duration='500'>
					<h1>Watch My Podcast</h1>
					<h3>on reversal of Diabetes and Thyroid</h3>
				</div>
			</div>
			</div>
	);
};

export default Podcast;
