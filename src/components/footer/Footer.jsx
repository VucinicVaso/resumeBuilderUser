import React from "react";
import FooterButton from "../footerButton/FooterButton";

const Footer = ({ onButtonClick }) => {
  const icons = ["fa-home", "fa-user", "fa-cog", "fa-bell", "fa-info-circle"];

  return (
    <div className="footer-container d-flex justify-content-center">
      <div className="footer-inner d-flex gap-3 p-3 rounded-pill">
        
        { icons.map((icon, idx) => (
          <FooterButton 
            key={idx} 
            iconClass={icon} 
            onClick={onButtonClick} 
          />
        )) }
      
      </div>
    </div>
  );
};

export default Footer;