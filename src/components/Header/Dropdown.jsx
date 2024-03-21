import React, { useState } from 'react';

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMainLinkClick = () => {
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

  const options = [
    { id: 1, name: 'Option 1', submenu: ['Submenu 1-1', 'Submenu 1-2', 'Submenu 1-3'] },
    { id: 2, name: 'Option 2', submenu: ['Submenu 2-1', 'Submenu 2-2', 'Submenu 2-3'] },
    { id: 3, name: 'Option 3', submenu: ['Submenu 3-1', 'Submenu 3-2', 'Submenu 3-3'] },
  ];

  return (
    <div className="dropdown">
      <div className="main-link" onClick={handleMainLinkClick}>
        Main Link
      </div>
      {showDropdown && (
        <div className="dropdown-content">
          {options.map(option => (
            <div
              key={option.id}
              className="option"
              onMouseEnter={() => handleOptionClick(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
      {showSubMenu && selectedOption && (
        <div className="submenu">
          <div className="submenu-header">
            Submenu
            <span className="cross-icon" onClick={handleCrossClick}>X</span>
          </div>
          {selectedOption.submenu.map((item, index) => (
            <div key={index} className="submenu-item">{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
