import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook from React Router

const Collapsible = () => {
  const [initialized, setInitialized] = useState(false); // State to track initialization
  const location = useLocation(); // Get current location from React Router

  useEffect(() => {
    if (initialized) {
      const handleClick = (event) => {
        const header = event.target.closest(".collapsible-header");
        const body = header.nextElementSibling;
        const pHeight = body.querySelector("div").offsetHeight;
        const uHeight = body.querySelector("ul")
          ? body.querySelector("ul").offsetHeight
          : 0;
        const totalHeight = pHeight + uHeight;

        if (body.clientHeight) {
          body.style.height = 0;
        } else {
          document
            .querySelectorAll(".collapsible-body")
            .forEach((el) => (el.style.height = 0));
          body.style.height = totalHeight + "px";
        }
      };

      const collapsibleElements = document.querySelectorAll(".collapsible");

      collapsibleElements.forEach((collElement) => {
        collElement.addEventListener("click", handleClick);
      });

      // Cleanup function to remove event listeners when component unmounts
      return () => {
        collapsibleElements.forEach((collElement) => {
          collElement.removeEventListener("click", handleClick);
        });
      };
    } else {
      setInitialized(true); // Set initialized to true after the first render
    }
  }, [location.pathname, initialized]); // Dependency array with location.pathname and initialized state

  return (
    // Your JSX for collapsible elements goes here
    <div className="collapsible">{/* Collapsible elements */}</div>
  );
};

export default Collapsible;
