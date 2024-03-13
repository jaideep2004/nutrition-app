import React from "react";
import "./footer.css";
const Footer = () => {
	return (
		<div>
			<footer className='footerwrap'>
				<div className='footleft'>
					<div>Let Food Be Your Medicine</div>
					
				</div>
				<div className='footcenter'>
					{/* <h5>Contact</h5> */}
					<table>
						<tr>
							<td>Email</td>
							<td></td>
						</tr>
						<tr>
							<td>Phone No.</td>
							<td>+91 98143 23293</td>
						</tr>
					</table>
				</div>
				<div className='footright'>
					<a href=''>
						<i class='fa-brands fa-facebook fa-2xl'></i>
					</a>
                    <a href=''>
                    <i class='fa-brands fa-instagram fa-2xl'></i>
                    </a>
                    <a href=''>
                    <i class='fa-brands fa-whatsapp fa-2xl'></i>
                    </a>
				</div>
				
			</footer>
			<div className='copyrightfoot'>© Copyright 2024    Dr.Arvind Sabharwal</div>
		</div>
	);
};

export default Footer;
