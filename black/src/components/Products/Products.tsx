import React, { useState } from 'react';
import Img1 from '/src/assets/first1.jpg';
import Img2 from '/src/assets/second2.jpg';
import Img from '/src/assets/planet.jpg';
import knowMore from '/src/assets/Frame2327.png';
import './Product.css'

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number>(0);

  const products = [
    {
      image: Img1,
      title: 'Centralized Control & Monitoring System',
      description:
        'A centralized control and monitoring system is a technology platform that enables centralized control and monitoring of various building systems, such as lighting, HVAC, security, and other systems.',
    },
    {
      image: Img2,
      title: 'NEMA-Mounted VOLC 1160',
      description:
        'The NEMA-Mounted VOLC 1160 is a robust and reliable control unit designed for outdoor environments. It is part of the VOLC series of streetlight controllers and is specifically mounted in accordance with NEMA (National Electrical Manufacturers Association) standards.',
    },
    {
      image: Img,
      title: 'Retrofit Street Light Controller VOLC 2160',
      description:
        'The Retrofit Street Light Controller VOLC 2160 is a modern solution designed to upgrade existing street lighting systems. It allows for the integration of smart features like remote monitoring, energy efficiency optimization, and fault detection.',
    },
    {
      image: Img1,
      title: 'Retrofit Street Light Controller VOLC 2180',
      description:
        'The Retrofit Street Light Controller VOLC 2180 is an advanced device designed to modernize traditional street lighting systems. It enables smart features such as remote monitoring, real-time fault detection, and energy efficiency enhancements. The VOLC 2180 is easy to integrate into existing setups.',
    },
    {
      image: Img2,
      title: 'Retrofit Street Light Controller VOLC 4180',
      description:
        'The Retrofit Street Light Controller VOLC 4180 is a cutting-edge device designed to transform conventional streetlights into smart, energy-efficient systems. It offers features like remote management, fault detection, and optimized power usage. Easy to install in existing infrastructures.',
    },
  ];

  const handleButtonClick = (index: number) => {
    setSelectedProduct(index);
  };

  const goToNextProduct = () => {
    setSelectedProduct((prev) => (prev + 1) % products.length);
  };

  const goToPreviousProduct = () => {
    setSelectedProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div id="product" style={{ width: '100%', background: '#BCD6E3' }}>
      <div id='pro1' style={{ width: '60%', margin: 'auto', paddingTop: '70px', paddingBottom: '90px' }}>
        <div style={{ marginBottom: '70px' }}>
          <p style={{ background: 'linear-gradient(to right, #A3B7FF, transparent)', width: '30px', height: '30px',paddingLeft:'15px' }}>Products</p>
          <p className='fs-2' style={{ marginRight: '10px' }}>
            <b>Cutting edge hardware</b>,offerings helping cities optimise resources and achieve smart development goals
          </p>
        </div>
        <div>
          {products.map((product, index) => (
            <button
              key={index}
              type="button"
              className="btn btn-outline-primary "
              onClick={() => handleButtonClick(index)}
              style={{ borderRadius: '0px' ,marginRight:'10px',marginBottom:'10px' }}
            >
              {product.title}
            </button>
          ))}
        </div>
        {selectedProduct !== null && (
          <div className="d-flex align-items-center position-relative pro">
            <img
              style={{ width: '57%', height: '450px', position: 'relative', zIndex: 1 }}
              src={products[selectedProduct].image}
              alt={products[selectedProduct].title}
            />
            <div id='title' style={{ width: '50%',paddingLeft:'50px' }}>
              <p>Products {selectedProduct + 1}/5</p>
              <h3>{products[selectedProduct].title}</h3>
              <p>{products[selectedProduct].description}</p>
              <a className='d-flex text-decoration-none'  href="#">Know more <img style={{marginLeft:'15px'}} src={knowMore} alt="" /> </a>
            </div>

            
            <button
              onClick={goToNextProduct}
              style={{
                position: 'absolute',
                bottom: '1px',
                right: '26%',
                zIndex: 2,
                background: '#fff',
                border: 'none',
                padding: '10px',
              
              }}
            >
              &gt;
            </button>

           
            <button
              onClick={goToPreviousProduct}
              style={{
                position: 'absolute',
                bottom: '1px',
                left: '66%',
                zIndex: 2,
                background: '#fff',
                border: 'none',
                padding: '10px',
               
              }}
            >
              &lt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
