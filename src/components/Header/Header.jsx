import React from "react";
import "./header.css";
import { Link ,NavLink} from "react-router-dom";
import { useState ,useEffect} from "react";
import './responsive.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	const [isIconVisible, setIsIconVisible] = useState(false);

	const toggleIcon = () => {
		setIsIconVisible(!isIconVisible);
	};

	const handleButtonClick = () => {
		toggleVisibility();
		toggleIcon();
		// Add any other functions you want to call here
	};

	const handleLinkClick = () => {
		// Close the menu when a link is clicked
		setIsVisible(false);
		setIsIconVisible(false);
	};

	return (
		<div className='header'>
			<header>
				<div className='headwrapper'>
					<div className='logo'>
						<Link to='/'>
							<div>DR. ARVIND SABHARWAL</div>
						</Link>
					</div>

{/* mobile menu */}
					<div onClick={handleButtonClick}>
						{/* <i id='mobilemenuicon' class='fa-solid fa-bars fa-xl' ></i> */}
						{isIconVisible ? (
							<i
								id='mmenu2'
								class='fa-solid fa-circle-xmark fa-2xl'
								data-aos='zoom-in'></i>
						) : (
							<div id='mmenu'>
								<div></div>
								<div></div>
								<div></div>
							</div>
						)}
					</div>

					{isVisible && (
						<div className='mobilemenu'>
							
							<a
								href='#about'
								id='mo1'
								data-aos='zoom-in-down'
								// data-aos-duration='500'
								onClick={handleLinkClick}>
								<div className='optcontain0'>ABOUT ME</div>
							</a>
							<a
								href='#blog'
								id='mo1'
								data-aos='zoom-in-down'
								// data-aos-duration='500'
								onClick={handleLinkClick}>
								<div className='optcontain0'>BLOG</div>
							</a>
							<a
								href='https://api.whatsapp.com/send?phone=9814323293'
								id='mo1'
								data-aos='zoom-in-down'
								// data-aos-duration='500'
								onClick={handleLinkClick}>
								<div className='optcontain0'>CALL NOW</div>
							</a>
							
						</div>
					)}

					
					<div className='headlinks'>
						<div className='hlink'>
							<a href='#about'>ABOUT ME</a>
						</div>
						<div className='hlink'>
							<a href='#blog'>BLOG</a>
						</div>
						<div className='hlink'>
							<a href='https://api.whatsapp.com/send?phone=9814323293'>
								CALL NOW
							</a>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
