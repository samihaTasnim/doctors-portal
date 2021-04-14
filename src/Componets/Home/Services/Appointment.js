import React from 'react';
import doctor from '../../../images/doctor.png'

const Appointment = () => {
  return (
    <div className="container mb-5">
      <div className="row rounded" style={{backgroundColor: '#3A4256', height: '60vh'}}>
        <div className="col-md-5" style={{position: 'relative'}}>
          <img src={doctor} alt="" style={{position: 'absolute', bottom: '0px', left: '40px', height: '130%'}}/>
        </div>
        <div className="col-md-7 p-5 text-white">
          <h4 style={{color: '#1CC7C1'}}>Appointment</h4>
          <br/>
          <h3>Make an appointment today</h3>
          <br/>
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nam eos eligendi, dolor ad corrupti tempora accusamus aspernatur repellat quasi, quia quam molestiae aliquam!</p>
          <br/>
          <button className="btn btn-secondary" style={{backgroundColor: '#1CC7C1', borderStyle: 'none'}}>Get appointment</button>
          <div className="col-md-2"></div>
          </div>
      </div>
    </div>
  );
};

export default Appointment;