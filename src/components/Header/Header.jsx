

// import React, { useState } from "react";
// import "./header.css";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//   const [isSubDropdownVisible, setIsSubDropdownVisible] = useState(false);

//   const handleDropdownHover = () => {
//     setIsDropdownVisible(true);
//     setIsSubDropdownVisible(false); // Hide subdropdown initially when main dropdown is hovered
//   };

//   const handleDropdownLeave = () => {
//     setIsDropdownVisible(false);
//     setIsSubDropdownVisible(false);
//   };

//   const handleOptionHover = (option) => {
//     setSelectedOption(option); // Set the selected option when hovered
//     setIsSubDropdownVisible(true); // Show subdropdown when an option is hovered
//   };

//   const handleOptionLeave = () => {
//     setSelectedOption(null); // Clear selected option when leaving the option
//     setIsSubDropdownVisible(false); // Hide subdropdown when leaving the option
//   };

//   return (
//     <div className="header">
//       <header>
//         <div className="headwrapper">
//           <div className="logo">
//             <Link to="/">
//               <div>DR. ARVIND SABHARWAL</div>
//             </Link>
//           </div>

//           <div className="headlinks">
//             <div
//               className="hlink"
//               onMouseEnter={handleDropdownHover}
//               onMouseLeave={handleDropdownLeave}
//             >
//               <a href="#">TYPES OF DIET </a>
//               {isDropdownVisible && (
//                 <div className="dropdown">
//                   <div
//                     className="option"
//                     onMouseEnter={() => handleOptionHover("LCHF Diet")}
//                     onMouseLeave={handleOptionLeave}
//                   >
//                     LCHF Diet
//                   </div>
//                   <div
//                     className="option"
//                     onMouseEnter={() => handleOptionHover("Veganism")}
//                     onMouseLeave={handleOptionLeave}
//                   >
//                     Veganism
//                   </div>
//                   <div
//                     className="option"
//                     onMouseEnter={() => handleOptionHover("Paleo Diet")}
//                     onMouseLeave={handleOptionLeave}
//                   >
//                     Paleo Diet
//                   </div>
//                   <div
//                     className="option"
//                     onMouseEnter={() => handleOptionHover("Atkin Diet")}
//                     onMouseLeave={handleOptionLeave}
//                   >
//                     Atkin Diet
//                   </div>
//                   <div
//                     className="option"
//                     onMouseEnter={() => handleOptionHover("Keto Diet")}
//                     onMouseLeave={handleOptionLeave}
//                   >
//                     Keto Diet
//                   </div>
//                   <div
//                     className="option"
//                     onMouseEnter={() =>
//                       handleOptionHover("Intermittent Fasting")
//                     }
//                     onMouseLeave={handleOptionLeave}
//                   >
//                     Intermittent Fasting
//                   </div>
//                   <div
//                     className="option"
//                     onMouseEnter={() => handleOptionHover("Dukan Diet")}
//                     onMouseLeave={handleOptionLeave}
//                   >
//                     Dukan Diet
//                   </div>
//                   <div
//                     className="option"
//                     onMouseEnter={() => handleOptionHover("DASH Diet")}
//                     onMouseLeave={handleOptionLeave}
//                   >
//                     DASH Diet
//                   </div>
//                   <div
//                     className="option"
//                     onMouseEnter={() => handleOptionHover("Day Diet")}
//                     onMouseLeave={handleOptionLeave}
//                   >
//                     Day Diet
//                   </div>
//                   <div
//                     className="option"
//                     onMouseEnter={() =>
//                       handleOptionHover("Mediterranean Diet")
//                     }
//                     onMouseLeave={handleOptionLeave}
//                   >
//                     Mediterranean Diet
//                   </div>
//                 </div>
//               )}
//               {isSubDropdownVisible && (
//                 <div className="sub-dropdown">
//                   {/* Render subdropdown based on the selected option */}
//                   {selectedOption && (
//                     <>
//                       <div>Sub Option 1 for {selectedOption}</div>
//                       <div>Sub Option 2 for {selectedOption}</div>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>

//             <div className="hlink">
//               <a href="#about">ABOUT ME</a>
//             </div>
//             <div className="hlink">
//               <a href="#blog">BLOG</a>
//             </div>
//             <div className="hlink">
//               <a href="https://api.whatsapp.com/send?phone=9814323293">
//                 CALL NOW
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useRef } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSubDropdownVisible, setIsSubDropdownVisible] = useState(false);
  const dropdownTimerRef = useRef(null);

  const handleDropdownHover = () => {
    setIsDropdownVisible(true);
    setIsSubDropdownVisible(false); // Hide subdropdown initially when main dropdown is hovered
    clearTimeout(dropdownTimerRef.current);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
      setIsSubDropdownVisible(false);
    }, 500); // Set a delay before hiding the dropdown
  };

  const handleOptionHover = (option) => {
    setSelectedOption(option); // Set the selected option when hovered
    setIsSubDropdownVisible(true); // Show subdropdown when an option is hovered
  };

  const handleOptionLeave = () => {
    setSelectedOption(null); // Clear selected option when leaving the option
    setIsSubDropdownVisible(false); // Hide subdropdown when leaving the option
  };

  return (
    <div className="header">
      <header>
        <div className="headwrapper">
          <div className="logo">
            <Link to="/">
              <div>DR. ARVIND SABHARWAL</div>
            </Link>
          </div>

          <div className="headlinks">
            <div
              className="hlink"
              onMouseEnter={handleDropdownHover}
              onMouseLeave={handleDropdownLeave}
            >
              <a href="#">TYPES OF DIET </a>
              {isDropdownVisible && (
                <div className="dropdown">
                  <div
                    className="option"
                    onMouseEnter={() => handleOptionHover("LCHF Diet")}
                    onMouseLeave={handleOptionLeave}
                  >
                    LCHF Diet
                  </div>
                  <div
                    className="option"
                    onMouseEnter={() => handleOptionHover("Veganism")}
                    onMouseLeave={handleOptionLeave}
                  >
                    Veganism
                  </div>
                  <div
                    className="option"
                    onMouseEnter={() => handleOptionHover("Paleo Diet")}
                    onMouseLeave={handleOptionLeave}
                  >
                    Paleo Diet
                  </div>
                  <div
                    className="option"
                    onMouseEnter={() => handleOptionHover("Atkin Diet")}
                    onMouseLeave={handleOptionLeave}
                  >
                    Atkin Diet
                  </div>
                  <div
                    className="option"
                    onMouseEnter={() => handleOptionHover("Keto Diet")}
                    onMouseLeave={handleOptionLeave}
                  >
                    Keto Diet
                  </div>
                  <div
                    className="option"
                    onMouseEnter={() =>
                      handleOptionHover("Intermittent Fasting")
                    }
                    onMouseLeave={handleOptionLeave}
                  >
                    Intermittent Fasting
                  </div>
                  <div
                    className="option"
                    onMouseEnter={() => handleOptionHover("Dukan Diet")}
                    onMouseLeave={handleOptionLeave}
                  >
                    Dukan Diet
                  </div>
                  <div
                    className="option"
                    onMouseEnter={() => handleOptionHover("DASH Diet")}
                    onMouseLeave={handleOptionLeave}
                  >
                    DASH Diet
                  </div>
                  <div
                    className="option"
                    onMouseEnter={() => handleOptionHover("Day Diet")}
                    onMouseLeave={handleOptionLeave}
                  >
                    Day Diet
                  </div>
                  <div
                    className="option"
                    onMouseEnter={() =>
                      handleOptionHover("Mediterranean Diet")
                    }
                    onMouseLeave={handleOptionLeave}
                  >
                    Mediterranean Diet
                  </div>
                </div>
              )}
              {isSubDropdownVisible && (
                <div className="sub-dropdown">
                  {/* Render subdropdown based on the selected option */}
                  {selectedOption && (
                    <>
                      <div>Sub Option 1 for {selectedOption}</div>
                      <div>Sub Option 2 for {selectedOption}</div>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="hlink">
              <a href="#about">ABOUT ME</a>
            </div>
            <div className="hlink">
              <a href="#blog">BLOG</a>
            </div>
            <div className="hlink">
              <a href="https://api.whatsapp.com/send?phone=9814323293">
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
