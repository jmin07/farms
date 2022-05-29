
import React, { useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as IconName  from "react-icons/fc";

import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";

import './Navbar.css';

function Navbar(){
    return(
        <>   
            <nav className='navbar'>
                <ul className='nav-menu-items'>
                    <li className="navbar-toggle">
                        <h1>MyFarm's <br/>
                        store</h1>
                    </li>
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