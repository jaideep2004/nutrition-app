import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className='header'>
			<header>
				<div className='headwrapper'>
					<div className='logo'>
						<Link to='/'>
							<div>DR. ARVIND SABHARWAL</div>
						</Link>
					</div>
					<div className='headlinks'>
						<div className='hlink'>
							<a href="#about">ABOUT ME</a>
							
						</div>
						<div className='hlink'>
						<a href="#blog">BLOG</a>
						</div>
						<div className='hlink'>
							<a href="https://api.whatsapp.com/send?phone=9814323293">CALL NOW
							</a>
							

						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
