import React from 'react';
import './Eco.css'
import Img from '/src/assets/street-light.png';
import Gateway from '/src/assets/Frame.png';
import User from '/src/assets/Group8948.png';
import Use from '/src/assets/Group8945.png';
import Eval from '/src/assets/Group8949.png';

const Ecosystem: React.FC = () => {


    return (
        <div className='total' style={{ width: '100%' }}>
            <div className="eco" style={{ width: '60%', margin: 'auto', marginTop: '70px', marginBottom: '90px' }}>
                <div >
                    <p style={{ background: 'linear-gradient(to right, #A3B7FF, transparent)', width: '30px', height: '30px', paddingLeft: '15px' }}>Ecosystem</p>
                    <h4>How does a smart street light ecosystem work?</h4>
                </div>
                <div className='outer d-flex justify-content-between align-items-center' style={{ marginTop: '35px' }}>
                    <div className='inner custom-pb'>
                        <div className='d-flex ' style={{ gap: '20px' }}>
                            <div style={{ width: '90px', height: '90px', border: '2px dashed black', alignContent: 'center', paddingLeft: '8px', borderRadius: '20px' }}>
                                <div  style={{ width: '70px', height: '70px', border: '2px solid black', alignContent: 'center', borderRadius: '20px', paddingLeft: '9px' }}>
                                    <img style={{ width: '50px;', height: '50px', }} src={Img} alt="" />
                                </div>
                            </div >
                            <div style={{ width: '90px', height: '90px', border: '2px dashed black', alignContent: 'center', paddingLeft: '8px', borderRadius: '20px' }}>
                                <div style={{ width: '70px', height: '70px', border: '2px solid black', alignContent: 'center', borderRadius: '20px', paddingLeft: '9px' }}>
                                    <img style={{ width: '50px;', height: '50px' }} src={Img} alt="" />
                                </div>
                            </div>
                        </div>
                        <p style={{ marginLeft: '53px', marginTop: '15px', fontSize: '10px' }}><b>Street light controler</b></p>
                        <p style={{ fontSize: '10px', marginLeft: '15px', whiteSpace: 'normal', width: '200px' }}>Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp</p>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '1195px', 
                            left: '770px',
                            width: '2px',
                            height: '40px', 
                            border:'2px dashed black'
                        }}
                    ></div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '1234px', 
                            left: '680px', 
                            width: '90px', 
                            height: '2px', 
                            border:'2px dashed black'
                        }}
                    ></div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '1234px', 
                            left: '772px', 
                            width: '90px', 
                            height: '2px', 
                            border:'2px dashed black'
                        }}
                    ></div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '1235px',
                            left: '678px', 
                            width: '2px',
                            height: '48px', 
                            border:'2px dashed black'
                        }}
                    ></div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '1235px', 
                            left: '862px', 
                            width: '2px', 
                            height: '48px', 
                           border:'2px dashed black'
                        }}
                    ></div>
                    <div className='inner'>
                        <div id='id1'>
                            <div  style={{ width: '90px', height: '90px', border: '2px dashed black', alignContent: 'center', paddingLeft: '8px', borderRadius: '20px', marginLeft: '170px' }}>
                                <div style={{ width: '70px', height: '70px', border: '2px solid black', alignContent: 'center', paddingLeft: '4px', borderRadius: '20px' }}>
                                    <img style={{ width: '50px;', height: '50px' }} src={Gateway} alt="" />
                                </div>
                            </div>
                            <p style={{ marginLeft: '192px', marginTop: '15px', fontSize: '10px' }}><b>Gateway</b></p>
                            <p style={{ fontSize: '10px', marginLeft: '150px', whiteSpace: 'normal', width: '170px' }}>Employed for interfacing between a Controller and the Lighting Management Software</p>
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                top: '1064px', 
                                left: '502px', 
                                width: '220px',
                                height: '2px', 
                                border:'2px dashed black'
                            }}
                        ></div>
                        <div className='d-flex use' style={{ paddingLeft: '90px', paddingTop: '70px' }}>
                            <div>
                                <div style={{ width: '90px', height: '90px', border: '2px dashed black', alignContent: 'center', paddingLeft: '8px', borderRadius: '20px' }}>
                                    <div style={{ width: '70px', height: '70px', border: '2px solid black', alignContent: 'center', paddingLeft: '12px', borderRadius: '20px' }}>
                                        <img style={{ width: '50px;', height: '50px' }} src={Eval} alt="" />
                                    </div>
                                </div>
                                <p style={{ marginTop: '20px', marginLeft: '30px', fontSize: '10px' }}><b>Users</b></p>
                                <p style={{ fontSize: '10px', marginLeft: '15px', whiteSpace: 'normal', width: '170px' }}>Data from the cloud is used to monitor and control street lights by the System Managers.</p>
                            </div>
                            <div>
                                <div style={{ width: '90px', height: '90px', border: '2px dashed black', alignContent: 'center', paddingLeft: '8px', borderRadius: '20px' }}>
                                    <div style={{ width: '70px', height: '70px', border: '2px solid black', alignContent: 'center', paddingLeft: '10px', borderRadius: '20px' }}>
                                        <img style={{ width: '50px;', height: '50px' }} src={User} alt="" />
                                    </div>
                                </div>
                                <p style={{ marginTop: '20px', marginLeft: '22px', fontSize: '10px' }}><b>Evaluation</b></p>
                                <p style={{ fontSize: '10px', marginLeft: '15px', whiteSpace: 'normal', width: '176px' }}>Gathered insights are used to evaluate the performance of the lighting systems</p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '1064px', 
                            left: '810px', 
                            width: '255px', 
                            height: '2px', 
                            border:'2px dashed black'
                        }}
                    ></div>
                    <div className='inners' style={{ paddingBottom: '260px' }}>
                        <div style={{ width: '90px', height: '90px', border: '2px dashed black', alignContent: 'center', paddingLeft: '8px', borderRadius: '20px', marginLeft: '15px' }}>
                            <div style={{ width: '70px', height: '70px', border: '2px solid black', alignContent: 'center', paddingLeft: '8px', borderRadius: '20px' }}>
                                <img style={{ width: '50px;', height: '50px' }} src={Use} alt="" />
                            </div>
                        </div>
                        <p style={{ marginTop: '20px', fontSize: '10px', whiteSpace: 'normal', width: '120px', marginLeft: '20px' }}><b>Cloud-based Management System</b></p>
                        <p style={{ fontSize: '10px', marginLeft: '15px', whiteSpace: 'normal', width: '150px' }}>Collects information from multiple gateways</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ecosystem;
