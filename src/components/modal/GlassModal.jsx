import React, { useState } from "react";

const GlassModal = ({ show, onClose }) => {
    
    const [minimized, setMinimized] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    if(!show) return null;

    const toggleMinimize = () => setMinimized(!minimized);
    const toggleFullscreen = () => setFullscreen(!fullscreen);

    return(
        <div handle=".modal-header">
            <div
                className="glass-modal position-fixed top-50 start-50 translate-middle"
                style={{
                    width: fullscreen ? "80vw" : "40vw",
                    height: minimized ? "auto" : "auto",
                    zIndex: 1050,
                }}>
                <div className="modal-content rounded shadow glass-style">
                    <div className="modal-header justify-content-between">
                        <h5 className="modal-title">Naslov</h5>

                        <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-outline-light" onClick={toggleMinimize}>
                                <i className="fa fa-minus" />
                            </button>
                            <button className="btn btn-sm btn-outline-light" onClick={toggleFullscreen}>
                                <i className="fa fa-expand" />
                            </button>

                            <button className="btn btn-sm btn-outline-light" onClick={onClose}>
                                <i className="fa fa-times" />
                            </button>
                        </div>
                    </div>
          
                    {!minimized && (
                        <div className="modal-body text-dark">
                        <p>Ovo je sadržaj modala</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
  );
};

export default GlassModal;
