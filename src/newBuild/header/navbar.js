import { Link, useLocation } from "react-router-dom";
import React from "react";

const Navbar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <>
      <ul className="new-header-navbar">
        {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/">Hjem</Link>
        </li>
        <li className={splitLocation[1] === "about" ? "active" : ""}>
          <Link to="publicnews">Nyheter</Link>
        </li>
        <li className={splitLocation[1] === "about" ? "active" : ""}>
          <Link to="tariffavtalen">Tariffavtalen</Link>
        </li>
        <li className={splitLocation[1] === "about" ? "active" : ""}>
          <Link to="/members">Members</Link>
        </li>
        <li className={splitLocation[1] === "service" ? "active" : ""}>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar