import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Header2 = () => {
	//animation
	useEffect(() => {
		AOS.init();
	}, []);

	//dropdown

	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [showSubMenu, setShowSubMenu] = useState(false);

	const handleMainLinkClick = (e) => {
		e.preventDefault();
		setShowDropdown(!showDropdown);
		setShowSubMenu(false); // Close subdropdown when main dropdown is toggled
	};

	const handleOptionClick = (option) => {
		if (selectedOption === option) {
			setSelectedOption(null);
			setShowSubMenu(false);
		} else {
			setSelectedOption(option);
			setShowSubMenu(true);
		}
	};

	const handleCrossClick = () => {
		setShowSubMenu(false);
	};

	//mobile menu

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
	};

	const handleLinkClick = () => {
		setIsVisible(false);
		setIsIconVisible(false);
	};

	const options = [
		{
			id: 1,
			name: "LCHF Diet",
			submenu: [
				"LCHF diets are low in carbohydrates, high in fats and moderate in protein. Daily carb recommendations on this diet can range from under 20 grams up to 100 grams. The LCHF lifestyle promotes reducing the number of carbs that you consume and replacing them with fats. The ketogenic diet and Atkins diet are types of LCHF diets. A number of studies have shown that low-carb, high-fat diets are an effective way to promote weight loss, treat PCOD, autoimmune issues, acidity, bloating, and thyroid problems.",
			],
		},
		{
			id: 2,
			name: "Veganism",
			submenu: [
				"Veganism is the practice of abstaining from the use of animal products—particularly in diet—and an associated philosophy that rejects the commodity status of animals. A person who follows the diet or philosophy is known as a vegan. Veganism. The symbol widely used to denote a vegan-friendly product.",
			],
		},
		{
			id: 3,
			name: "Paleo Diet",
			submenu: [
				"The typical paleo diet focuses on naturally raised meat and fish, as well as vegetables and fruits. It promotes avoiding dairy products and grains.",
			],
		},
		{
			id: 4,
			name: "Atkin Diet",
			submenu: [
				"The Atkins diet is a low-carbohydrate fad diet devised by Robert Atkins in the 1970s. It claims that carbohydrate restriction is crucial to weight loss and that the diet offered 'a high calorie way to stay thin forever.",
			],
		},
		{
			id: 5,
			name: "Keto Diet",
			submenu: [
				"“Ketogenic” is a term for a low-carb diet (like the Atkins diet). The idea is for you to get more calories from protein and fat and less from carbohydrates. When you eat less than 50 grams of carbs a day, your body eventually runs out of fuel (blood sugar) it can use quickly. This typically takes 3 to 4 days. Then you’ll start to break down protein and fat for energy, which can make you lose weight. This is called ketosis and hence the name Keto diet.",
			],
		},
		{
			id: 6,
			name: "Intermittent Fasting",
			submenu: [
				"Intermittent fasting is an eating pattern that cycles between periods of fasting and eating. It doesn't specify which foods you should eat but rather when you should eat them. Various forms of intermittent fasting exist, including alternate-day fasting, periodic fasting, and time-restricted feeding.",
			],
		},
		{
			id: 7,
			name: "Dukan Diet",
			submenu: [
				"The Dukan Diet is a high-protein, low-carb weight loss diet that is split into four phases. It was created by Dr. Pierre Dukan, a French general practitioner who specializes in weight management.",
			],
		},
		{
			id: 8,
			name: "DASH Diet",
			submenu: [
				"The DASH diet emphasizes portion size, eating a variety of foods and getting the right amount of nutrients. It was designed to help treat or prevent high blood pressure (hypertension), but it may also reduce the risk of other diseases, including diabetes.",
			],
		},
		{
			id: 9,
			name: "Mediterranean Diet",
			submenu: [
				"The Mediterranean diet emphasizes eating primarily plant-based foods, such as fruits and vegetables, whole grains, legumes, and nuts. It replaces butter with healthy fats, such as olive oil and canola oil, and uses herbs and spices instead of salt to flavor foods. Red meat is limited to no more than a few times a month, while fish and poultry are eaten regularly.",
			],
		},
	];

	return (
		<div className='header'>
			<header>
				<div className='headwrapper'>
					<Link to='/'>
						<div className='logo' onClick={handleLinkClick}>
							<div>DR. ARVIND SABHARWAL</div>
							<div>(Certified Nutritionist)</div>
						</div>
					</Link>

					{/* mobile menu */}
					<div onClick={handleButtonClick}>
						{/* <i id='mobilemenuicon' class='fa-solid fa-bars fa-xl' ></i> */}
						{isIconVisible ? (
							<i
								id='mmenu2'
								className='fa-solid fa-circle-xmark fa-2xl'
								data-aos='zoom-in'></i>
						) : (
							<div id='mmenu' data-aos='zoom-in'>
								<div></div>
								<div></div>
								<div></div>
							</div>
						)}
					</div>

					{isVisible && (
						<div className='mobilemenu' data-aos='zoom-in-down'>
							{/* Dropdown for Types of Diet */}
							<Link
								to='/'
								onClick={handleLinkClick}
								id='mo1'
								data-aos='zoom-in-down'>
								<a href='#'>
									<div>HOME</div>
								</a>
							</Link>

							<a
								href='#about'
								id='mo1'
								data-aos='zoom-in-down'
								onClick={handleLinkClick}>
								<div>ABOUT ME</div>
							</a>
							<a
								href='#'
								id='mo1'
								data-aos='zoom-in-down'
								onClick={handleMainLinkClick}>
								<div>DIET TYPES</div>
							</a>
							<div className='maind'>
								{showDropdown && (
									<div className='dropdown-content'>
										{options.map((option) => (
											<div
												className='doption'
												key={option.id}
												onClick={() => handleOptionClick(option)}>
												{option.name}
											</div>
										))}
									</div>
								)}
								{showSubMenu && selectedOption && (
									<div className='submenu'>
										<div>
											<i
												class='fa-regular fa-circle-xmark fa-lg'
												onClick={handleCrossClick}></i>
										</div>
										{selectedOption.submenu.map((item, index) => (
											<div key={index} className='submenu-item'>
												{item}
											</div>
										))}
									</div>
								)}
							</div>
							<Link to='dietplans' id='mo1' onClick={handleLinkClick}>
								<a href='#' data-aos='zoom-in-down'>
									<div>DIET PLANS</div>
								</a>
							</Link>

							<a
								href='#blog'
								id='mo1'
								data-aos='zoom-in-down'
								onClick={handleLinkClick}>
								<div>BLOG</div>
							</a>
							<Link
								to='signup'
								id='mo1'
								onClick={handleLinkClick}
								data-aos='zoom-in-down'>
								<a href='#'>
									<div>SIGN UP</div>
								</a>
							</Link>

							<a
								href='https://api.whatsapp.com/send?phone=9814323293'
								id='mo1'
								onClick={handleLinkClick}>
								<i class='fa-brands fa-whatsapp fa-beat fa-lg'></i>
								<div>CALL NOW</div>
							</a>
						</div>
					)}

					{/* laptop menu */}
					<div className='headlinks'>
						<div className='hlink'>
							<a href='#about'>ABOUT ME</a>
						</div>

						<div className='hlink'>
							<a href='' onClick={handleMainLinkClick}>
								DIET TYPES
							</a>
							<div className='maind'>
								{showDropdown && (
									<div className='dropdown-content' data-aos='zoom-in-down'>
										{options.map((option) => (
											<div
												className='doption'
												key={option.id}
												onMouseEnter={() => handleOptionClick(option)}>
												{option.name}
											</div>
										))}
									</div>
								)}
								{showSubMenu && selectedOption && (
									<div className='submenu' data-aos='zoom-in-right'>
										<div>
											<i
												class='fa-regular fa-circle-xmark fa-lg'
												onClick={handleCrossClick}></i>
										</div>
										{selectedOption.submenu.map((item, index) => (
											<div key={index} className='submenu-item'>
												{item}
											</div>
										))}
									</div>
								)}
							</div>
						</div>

						<Link to='dietplans'>
							<div className='hlink'>
								<a href='#'>DIET PLANS</a>
							</div>
						</Link>
						<div className='hlink'>
							<a href='#blog'>BLOG</a>
						</div>

						<Link to='signup'>
							<div className='hlinksign'>
								<a href=''>SIGN UP</a>
							</div>
						</Link>

						<div className='hlink'>
							<i class='fa-brands fa-whatsapp fa-beat fa-lg'></i>
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

export default Header2;
