import React from "react";
import './Dropdown.scss';
import {useState, useEffect, onClick, useRef} from "react";

import {Hamburger } from "../Header/HeaderStyle";


const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    
    
    return (
     <div className="menu-container">
        
        <Hamburger onClick={onClick} />
  

      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><a href="/allcourses">Courses</a></li>
          <li><a href="/">Sign In</a></li>
          <li><a href="/saved">Register</a></li>
        </ul>
      </nav>
    </div>
    );
};

export default DropdownMenu;
