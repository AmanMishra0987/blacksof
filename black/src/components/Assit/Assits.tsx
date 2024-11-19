import React from 'react'
import Img3 from '/src/assets/image41.png';

const Assits: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '60%', margin: 'auto', paddingTop: '70px', paddingBottom: '90px' }}>
        <h3 style={{ marginLeft: '60px', marginBottom: '70px' }}>The plateform assist city managers on multiple fonts</h3>
        <div className='d-flex'>
          <div style={{ flex: 1, borderRight: '2px solid rgba(0, 0, 0, 0.1)', borderBottom: '2px solid rgba(0, 0, 0, 0.1)', paddingRight: '150px' }}>
            <img style={{ width: '50px', height: '50px' }} src={Img3} alt="" />
            <p style={{ fontSize: '30px' }}>Saves on power consumption & related costs</p>
          </div>
          <div style={{ flex: '1', paddingLeft: '150px', borderBottom: '2px solid rgba(0, 0, 0, 0.1)', paddingTop: '40px' }}>
            <img style={{ width: '50px', height: '50px' }} src={Img3} alt="" />
            <p style={{ fontSize: '30px' }}>
              <span style={{ display: 'block' }}>Lower</span>
              <span style={{ display: 'block' }}>Downtimes</span>
            </p>
          </div>
        </div>
        <div className='d-flex'>
          <div style={{ flex: 1, borderRight: '2px solid rgba(0, 0, 0, 0.1)', borderBottom: '2px solid rgba(0, 0, 0, 0.1)', paddingRight: '10px',paddingTop:'50px' }}>
            <img style={{ width: '50px', height: '50px' }} src={Img3} alt="" />
            <p style={{ fontSize: '30px' }}>Detects power thefts</p>
          </div>
          <div style={{ flex: '4', paddingLeft: '250px', borderBottom: '2px solid rgba(0, 0, 0, 0.1)',paddingTop:'50px' }}>
            <img style={{ width: '50px', height: '50px' }} src={Img3} alt="" />
            <p style={{ fontSize: '30px',whiteSpace:'normal' }}>Ensures smart monitoring and control of the street light infrastructure.</p>
          </div>
        </div>
        <div className='d-flex'>
          <div style={{ flex: 3, borderRight: '2px solid rgba(0, 0, 0, 0.1)', borderBottom: '2px solid rgba(0, 0, 0, 0.1)', paddingRight: '100px',paddingTop:'40px' }}>
            <img style={{ width: '50px', height: '50px' }} src={Img3} alt="" />
            <p style={{fontSize: '30px'}}>Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage 
            failures, etc.</p>
          </div>
          <div style={{ flex: '1', paddingLeft: '150px', borderBottom: '2px solid rgba(0, 0, 0, 0.1)',paddingTop:'40px' }}>
            <img style={{ width: '50px', height: '50px' }} src={Img3} alt="" />
            <p style={{fontSize: '30px'}}>Ensures security in the neighborhood</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assits
