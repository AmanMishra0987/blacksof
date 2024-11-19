import React, { useState } from 'react';
import Img from '/src/assets/statuspage.png';
import './NavBar.css';

const NavBar: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div style={{ backgroundColor: '#000509', width: '100%', height: '107px', borderBottom: '1px solid #162029' }}>
            <nav
                className="navbar navbar-expand-lg mx-auto"
                style={{
                    backgroundColor: '#000509',
                    maxWidth: '960px',
                }}
                data-bs-theme="dark"
            >
                <div className="container-fluid" style={{ marginTop: '16px' }}>
                    <a className="navbar-brand text-light" href="#">
                        <img src={Img} alt="" /> Smart Lights
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#hero">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link active text-light" aria-current="page" href="#product">
                                    Products
                                </a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link active text-light" aria-current="page" href="#software">
                                    Software Services
                                </a>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="btn btn-primary ms-5"
                            style={{ width: '171px', height: '54px' }}
                            onClick={handleOpenModal}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </nav>

            
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

export default NavBar;
