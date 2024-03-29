import React from "react";
import './header.css'

import Navbar from "./gptNavbar/gptNavbar";

const Header = () => {
    return (
      <>
        <div className="header-div">
          <div className="header-logo-div">
            <h1>Welcome!</h1>
          </div>
          <Navbar />
        </div>
      </>
    );
};

export default Header