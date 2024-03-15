import React from 'react'
import './about.css'

import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
		AOS.init();
    }, []);
    
  return (
      
          
          <div className="aboutwrapper" id='about'>
          
          <div className="aboutleft">
              
              <img src="./images/profilepic.png" alt="" />
              <i class="fa-solid fa-carrot fa-2xl"></i>
              </div>
              <div className="aboutright">
              <h1 data-aos="fade-down" data-aos-duration="500">About Me</h1>
                  <div className="aboutcon" data-aos="fade-up" data-aos-duration="500">
                  
                  <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis magnam perspiciatis assumenda quod harum ea tempora veritatis minus voluptatibus vel exercitationem accusantium voluptatem aliquam nihil, quas tempore mollitia laborum eum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis magnam perspiciatis assumenda quod harum ea tempora veritatis minus
                  </p>
                  </div>
                 
              </div>
          </div>
    
  )
}

export default About