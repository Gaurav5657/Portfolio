import React from "react";

const Menu = () => {
  const toggleMenu = () => {};
  return (
    <div className="menu" onClick={toggleMenu}>
      <svg
        className="SVG"
        width="343"
        height="179"
        viewBox="0 0 343 179"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 1">
          <rect
            id="Rectangle 1"
            width="343"
            height="31"
            rx="15.5"
            fill="#C4C4C4"
          />
          <rect
            id="Rectangle 3"
            y="74"
            width="343"
            height="31"
            rx="15.5"
            fill="#C4C4C4"
          />
          <rect
            id="Rectangle 2"
            x="116"
            y="148"
            width="227"
            height="31"
            rx="15.5"
            fill="#C4C4C4"
          />
        </g>
      </svg>
    </div>
  );
};

export default Menu;
