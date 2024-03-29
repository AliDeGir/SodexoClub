import React from "react";
// import './header.css'
// import Navbar from "./navbar";

import BasicExample from "./bootstrapNavbar/bootstrapNavbar";

const Header = () => {
    return (
      <>
        <div className="header-div">
          <div className="header-logo-div">
            <h1>Welcome!</h1>
          </div>
          <BasicExample />
          {/* <Navbar /> */}
          {/* <GetUlData collectionPath="messagesApp/landingPageDb/landingPage" /> */}
          {/* <div className="navbar-div">
            <Link to="/">Home</Link>&nbsp;
            <Link to="/publicnews">News</Link>&nbsp;
            <Link to="/projects">Projects</Link>&nbsp;
            <Link to="/contact">Contact</Link>&nbsp;
            <Link to="/members">Members</Link>
          </div> */}
        </div>
      </>
    );
};

export default Header