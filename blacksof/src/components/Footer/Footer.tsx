import React from 'react';
import Img2 from '/src/assets/img2.jpg';
import Img from '/src/assets/statuspage.png';


const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Img2})`,
        backgroundSize: 'cover',
        color: 'white', 
        
      }}
    >
      <div style={{width:'80%',margin:'auto',paddingTop:'80px'}}>
        <div
          className="d-flex justify-content-between"
          style={{ marginBottom: '200px' }}
        >
          <p><img src={Img} alt="" />Smart Lights</p>
          <div
            className="d-flex"
            style={{
              paddingLeft: '120px',
              gap: '90px',
            }}
          >
            <p>Product</p>
            <p>Software Services</p>
            <p>Follow Us</p>
          </div>
        </div>
        <hr style={{ borderColor: 'white',width:'850px' }} />
        <div className="d-flex" style={{ gap: '20px' }}>
          <p style={{borderRight:'2px solid white',paddingRight:'20px'}}>Privacy Policy</p>
          <p style={{borderRight:'2px solid white',paddingRight:'20px'}}>Terms & Conditions</p>
          <p>Cookies Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
