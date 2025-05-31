import React from "react";

const FooterButton = ({ iconClass, onClick }) => {
    
    return (
        <button
            className="btn btn-light rounded-circle d-flex align-items-center justify-content-center neumorphic-button"
            style={{ width: "50px", height: "50px" }}
            onClick={onClick}
        >
            <i className={`fa ${iconClass}`}></i>
        </button>
    );

};

export default FooterButton;