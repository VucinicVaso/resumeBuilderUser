import React, { useState } from "react";
import styles from "./GlassModalStyle.module.css"; 

const GlassModal = ({ show, onClose }) => {
    
    const [minimized, setMinimized] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    if(!show) return null;

    const toggleMinimize = () => setMinimized(!minimized);
    const toggleFullscreen = () => setFullscreen(!fullscreen);

    function createHeader() {
        return <div className="modal-header justify-content-between m-1">
            <h5 className="modal-title">Naslov</h5>

            <div className="d-flex gap-2">
                <button className="btn btn-sm btn-outline-light" onClick={toggleMinimize}>
                    <i className="fa fa-minus" />
                </button>
                            
                <button className="btn btn-sm btn-secondary" onClick={toggleFullscreen}>
                    <i className="fa fa-expand" />
                </button>

                <button className="btn btn-sm btn-danger" onClick={onClose}>
                    <i className="fa fa-times" />
                </button>
            </div>
        </div>
    }

    function createBody() {
        return <div className="modal-body text-dark m-2">
            <p>Ovo je sadržaj modala</p>
        </div>
    }

    return(
        <div handle=".modal-header">
            <div
                className={`${styles.glassModal} position-fixed top-50 start-50 translate-middle`}
                style={{
                    width: fullscreen ? "80vw" : "40vw",
                    height: minimized ? "auto" : "auto",
                    zIndex: 1050,
                }}>
                <div className={`${styles.glassModalStyle} modal-content rounded shadow`}>
                    
                    { createHeader() }
          
                    {!minimized && ( createBody() )}

                </div>
            </div>
        </div>
    );
};

export default GlassModal;
