import React from "react";
import "./footer.css";
const Footer = () => {
	return (
		<div>
			<footer className='footerwrap'>
				<div className='footup'>
					<h2>Let Food Be Your Medicine</h2>
				</div>
				<div className='footdown'>
					<div className='footleft1'>
						<table>
							<tr>
								<td>Email</td>
								<td>arvindsabharwal1976@gmail.com</td>
							</tr>
							<tr>
								<td>Phone No.</td>
								<td>+91 98143 23293</td>
							</tr>
						</table>
					</div>
					<div className='footright1'>
						<a href=''>
							<i class='fa-brands fa-facebook fa-2xl'></i>
						</a>
						<a href='https://www.instagram.com/sabharwal993/'>
							<i class='fa-brands fa-instagram fa-2xl'></i>
						</a>
						<a href='https://twitter.com/sabharwal_dr'>
							<i class='fa-brands fa-x-twitter fa-2xl'></i>
						</a>
						<a href='https://api.whatsapp.com/send?phone=9814323293'>
							<i class='fa-brands fa-whatsapp fa-2xl'></i>
						</a>
					</div>
				</div>

				
			</footer>
			<div className='copyrightfoot'>© Copyright 2024 Dr.Arvind Sabharwal</div>
		</div>
	);
};

export default Footer;
