import React, { useState } from 'react';
import Img from '/src/assets/planet.jpg'; 
import './HeroSection.css'


const HeroSection: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div id="hero" className="outer" style={{ backgroundColor: '#000509', height: '105vh', position: 'relative' }}>
            
            <div
                className="text-center"
                style={{
                    backgroundColor: '#000509',
                    width: '800px',
                    margin: 'auto',
                    zIndex: 2,
                    position: 'relative',
                    paddingTop: '40px',
                }}
            >
                <h3 style={{ color: '#D8E6F5', fontSize: '20px' }}>Smart Lighting Solutions</h3>
                <h1 style={{ color: '#8498AD' }}>Bringing A New Perspective To Street Lights And The Cities Of Tomorrow</h1>
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ width: '171px', height: '54px', marginTop: '30px' }}
                    onClick={handleOpenModal}
                >
                    Login
                </button>
            </div>

           
            <div
                className="d-flex justify-content-center align-items-center hero"
                style={{
                    width: '75%', 
                    height: '67vh', 
                    margin: 'auto',
                    position: 'relative',
                }}
            >
                {/* Image */}
                <img
                    src={Img}
                    alt="Background"
                    style={{
                        objectFit: 'cover', 
                        width: '100%', 
                        height: '100%',
                    }}
                />

               
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent)', // Gradual opacity
                        pointerEvents: 'none', // Allows clicks to pass through
                    }}
                ></div>
            </div>

            {/* Modal */}
            {showModal && (
                <div
                    className="modal d-block"
                    tabIndex={-1}
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    role="dialog"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Login
                                    </button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleCloseModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeroSection;
