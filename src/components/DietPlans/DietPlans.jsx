import React, { useState, useEffect } from "react";
import { loadScript } from "./utils";
import "./diet.css";

const DietPlans = () => {
	const [selectedPlan, setSelectedPlan] = useState(null);

	const handlePlanSelect = (plan) => {
		setSelectedPlan(plan);
		if (window.Razorpay) {
			const razorpay = new window.Razorpay({
				key: "rzp_test_uCEraKVgEt8ZVM",
				amount: plan.price * 100, // Amount in paisa
				currency: "INR",
				name: "Nutrition Plans",
				description: `${plan.name} Plan`,                                    //rzp_test_uCEraKVgEt8ZVM
				image: "/path/to/your/logo.png",
				handler: function (response) {
					alert("Payment Successful!");
				},
			});
			razorpay.open();
		} else {
			alert("Razorpay SDK failed to load. Please try again later.");
		}
	};

	useEffect(() => {
		loadScript("https://checkout.razorpay.com/v1/checkout.js");
	}, []);

	const dietPlans = [
		{
			id: 1,
			img: "./images/n1.jpg",
			name: "3 Months Individual Program",
			price: 22000,
		},
		{
			id: 2,
			img: "./images/n2.jpg",
			name: "6 Months Individual Program",
			price: 35000,
		},
	];

	return (
		<div className='maindietwrap'>
			<div className='diethead'>
				<h1>Our Diet Plans</h1>
			</div>
			<div className='dietwrap'>
				<div className='dietwrap1'>
					<div className='dietwrap1head'>
						<h1>Program Details</h1>
					</div>
					<ul>
						<li>Mandatory - weekly zoom Sessions</li>
						<li>Optional - weekly Q&A sessions</li>
						<li>Personalization - Lifestyle Guideline</li>
						<li>Personalization - Health Report analysis & Guideline</li>
						<li>Personalization - Health Goal Setting</li>
						<li>Personalization - Nutritional supplement Guideline.</li>
						<li>Personalization - Diet Plan / Dietary Guideline</li>
					</ul>
					<div className='programtxt'>
						<p>
							Once you sign up, You get a welcome email with a Data sheet ( word
							file) which you need to fill up and need to send me back along
							with your Blood report. We shall fix up a suitable weekly time{" "}
							<b>( 1hr)</b> for zoom call. Everything will be analyzed &
							explained during the zoom call. The zoom calls will also cover the
							root cause analysis, explaining the science & basis of approach,
							dietary changes discussions.
						</p>
					</div>
				</div>

				<div className='dietwrap2'>
					<div className='dietlist'>
						{dietPlans.map((plan) => (
							<div key={plan.id} className='dietPlan'>
								<img src={plan.img} alt={plan.name} className='planimg' />
								<div className='plan-details'>
									<div className='pland1'>
										<div className='plan-name'>{plan.name}</div>
										<div className='plan-price'>₹{plan.price}</div>
									</div>

									<button
										onClick={() => handlePlanSelect(plan)}
										className='checkoutbtn'>
										Checkout
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DietPlans;
