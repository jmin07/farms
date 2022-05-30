import React from "react";

import { Link } from "react-router-dom";
import NavbarData from "./NavbarData";

import './Navbar.css';

function Navbar(){
    return(
        <>
            <nav className='navbar'>
                <ul className='nav-menu-items'>
                    {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>    
            </nav>
        </>
    );
}

export default Navbar;