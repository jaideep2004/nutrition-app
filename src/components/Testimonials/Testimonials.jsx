

// // import React, { useRef } from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import "./testimonials.css";

// // const Testimonials = ({ videos }) => {
// // 	const sliderRef = useRef(null);

// // 	const settings = {
// // 		// autoplay: true,
// // 		arrows: true,
// // 		dots: true,
// // 		infinite: true,
// // 		speed: 500,
// // 		slidesToShow: 2,
// // 		slidesToScroll: 1,
// // 		beforeChange: (current, next) => {
// // 			// Pause the current video before sliding
// // 			if (sliderRef.current) {
// // 				const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
// // 				const currentVideo = document.getElementById(`video-${currentSlide}`);
// // 				if (currentVideo) {
// // 					currentVideo.pause();
// // 				}
// // 			}
// // 		},
// // 	};

// // 	return (
// // 		<div className='testwrap'>
// // 			<h1>Our Testimonials</h1>
// // 			<Slider ref={sliderRef} {...settings}>
// // 				{videos.map((video, index) => (
// // 					<div key={index} className='videocontain'>
// // 						<video
// // 							id={`video-${index}`}
// // 							controls
// // 							autoPlay={false}
// // 							muted
// // 							loop
// // 							preload='metadata'
// // 							height={480}>
// // 							<source src={video.src} type='video/mp4' />
// // 							Your browser does not support the video tag.
// // 						</video>
// // 					</div>
// // 				))}
// // 			</Slider>
// // 		</div>
// // 	);
// // };

// // export default Testimonials;

// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./testimonials.css";

// const Testimonials = ({ videos }) => {
//   const sliderRef = useRef(null);

//   const handleBeforeChange = (oldIndex) => {
//     // Pause and mute the previous video when sliding
//     const currentVideo = document.getElementById(`video-${oldIndex}`);
//     if (currentVideo) {
//       currentVideo.pause();
//       currentVideo.muted = true;
//     }
//   };

//     const settings = {
//       autoplay:true,
//     arrows: true,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     beforeChange: handleBeforeChange,
//   };

//   return (
//     <div className="testwrap">
//           <h1>Our Testimonials</h1>
         

//       <Slider ref={sliderRef} {...settings} className="slider1">
//         {videos.map((video, index) => (
//             <div key={index} className="videocontain">
                
//             <video
//               id={`video-${index}`}
//               controls
//               autoPlay={false}
//               muted
//             //   loop
//             //   preload="metadata"
//               height={480}
//             >
//               <source src={video.src} type="video/mp4" />
//               Your browser does not support the video tag.
//                 </video>
//                 <p>{video.label}</p>
               
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Testimonials;


import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css";

const Testimonials = ({ videos }) => {
  const sliderRef = useRef(null);
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

  const handleBeforeChange = (oldIndex) => {
    // Pause and mute the previous video when sliding
    const currentVideo = document.getElementById(`video-${oldIndex}`);
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.muted = true;
    }
  };

  const settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
  };

  return (
    <div className="testwrap">
      <h1>Our Testimonials</h1>
      <Slider ref={sliderRef} {...settings} className="slider1">
        {videos.map((video, index) => (
          <div key={index} className="videocontain">
            <video
              id={`video-${index}`}
              controls
              autoPlay={false}
              muted
              height={480}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.label}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
