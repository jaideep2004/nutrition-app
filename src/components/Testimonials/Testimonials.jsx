

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./testimonials.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = ({ videos }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [slidesToShow, setSlidesToShow] = useState(2); // Initial value for bigger screens

  useEffect(() => {
    const handleResize = () => {
      // Adjust slidesToShow based on screen width
      if (window.innerWidth <= 800) {
        setSlidesToShow(1); // For mobile devices
      } else {
        setSlidesToShow(3); // For bigger screens
      }
    };

    // Call handleResize on initial mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBeforeChange = (index) => {
    // Pause and mute the previous video when sliding
    const currentVideo = document.querySelector(
      ".control-dots .dot.selected + .slide video"
    );
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.muted = true;
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="testwrap" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h1>Our Testimonials</h1>
      <Carousel
        showArrows
        autoPlay={!isHovered}
        infiniteLoop
        interval={3000}
        transitionTime={1000}
        showThumbs={false}
        showStatus={false}
        onChange={handleBeforeChange}
        centerMode
        centerSlidePercentage={100 / slidesToShow}
      >
        {videos.map((video, index) => (
          <div key={index} className="videocontain">
            <video id={`video-${index}`} controls autoPlay={false} muted height={450}>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="videolabel">
              <p>{video.label}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
