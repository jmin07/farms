import React, { useState } from "react";

import * as FaIcons from "react-icons/fa";

import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";

import './header.css';

function Header(){

    return(
        <>   
          <div className="main-header">
              <div>
                  <div>
                    <h3>이용자</h3>
                  </div>
              </div>
          </div>
        </>
    );
}

export default Header;