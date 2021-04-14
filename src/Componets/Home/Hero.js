import React from 'react';
import chair from '../../images/Bg-chair.png'
import './Hero.css';


const Hero = () => {
  return (
    <div>
      <div className="header-container">
        <div className="container">
          <div className="row d-flex align-items-center" style={{ height: '100vh' }}>
            <div className="col-md-6 p-3">
              <h2 style={{ color: '#3A4256' }}>We care about</h2>
              <h3 style={{ color: '#3A4256' }}>Your smile</h3>
              <br/>
              <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia pariatur, fugiat minima corrupti itaque minus obcaecati eaque facilis porro labore!</p>
              <br/>
              <button className="btn btn-secondary" style={{backgroundColor: '#1CC7C1', borderStyle: 'none'}}>Get appointment</button>
            </div>
            <div className="col-md-6">
              <img src={chair} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;