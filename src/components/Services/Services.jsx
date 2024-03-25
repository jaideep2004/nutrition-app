import React from "react";
import "./services.css";
import "../Header/responsive.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='servicewrapper'>
			<div className='service1' data-aos='fade-up' data-aos-duration='500'>
				<div className='servicehead'>
					<h1>Our Services</h1>
				</div>
				<div className='service2' >
					<div className='service'>
						<i class='fa-solid fa-heartbeat fa-xl'></i>
						<p>
							Expert guidance for managing <span>Type 1</span> and <span>Type 2 diabetes</span> with
							personalized meal plans and blood sugar monitoring.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-ribbon fa-xl'></i>
						<p>
							Comprehensive support for <span>Cancer-related nutrition</span> to
							optimize treatment outcomes and manage side effects.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-bone fa-xl'></i>
						<p>
							Tailored nutritional plans for addressing <span>Gout</span> by
							minimizing purine-rich foods and promoting hydration.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-heart fa-xl'></i>
						<p>
							Holistic approach to managing <span>Fatty liver</span> through
							diet, focusing on reducing sugar and saturated fat intake.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-stethoscope fa-xl'></i>
						<p>
							Specialized dietary recommendations for <span>Hypertension (High Blood Pressure) </span>
							management, emphasizing on sodium restriction and balanced
							nutrition.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-weight fa-xl'></i>
						<p>
							Personalized strategies for tackling <span>Obesity</span> through
							nutrition, including portion control and lifestyle modifications.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-venus-mars fa-xl'></i>
						<p>
							Guidance and support for managing{" "}
							<span>PCOD (Polycystic Ovarian Disease)</span> with diet, focusing
							on insulin regulation and hormone balance.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-pills fa-xl'></i>
						<p>
							Nutrition counseling for addressing{" "}
							<span>Erectile dysfunction</span> by improving blood flow and
							overall cardiovascular health.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-heart fa-xl'></i>
						<p>
							Dietary solutions for managing <span>Acidity</span> and{" "}
							<span>Bloating</span> effectively, including lifestyle
							modifications and targeted dietary changes.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-thermometer fa-xl'></i>
						<p>
							Customized nutritional plans for individuals with{" "}
							<span>Thyroid disorders</span> to support thyroid function and
							hormone balance.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-venus-mars fa-xl'></i>
						<p>
							Nutritional guidance for managing <span>Menopause symptoms</span>,
							focusing on hormone balance and bone health.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-heartbeat fa-xl'></i>
						<p>
							Dietary strategies to support <span>Cardiovascular health</span>{" "}
							and reduce risk factors for heart disease.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-syringe fa-xl'></i>
						<p>
							Nutritional recommendations for managing{" "}
							<span>Insulin resistance</span> and blood sugar control.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-fire fa-xl'></i>
						<p>
							Dietary interventions to reduce <span>Chronic inflammation</span>{" "}
							and support overall health and wellness.
						</p>
					</div>
					<div className='service'>
						<i class='fa-solid fa-weight fa-xl'></i>
						<p>
							Nutrition plans to address <span>Underweight issues</span> and
							promote healthy weight gain.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
