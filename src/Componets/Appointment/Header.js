import React from 'react';
import chair from '../../images/Bg-chair.png'
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const Header = ({handleChange}) => {
  return (
    <div className="container">
      <div className="row" style={{marginTop: '10%', marginBottom: '8%'}}>
        <div className="col-md-6 p-3">
          <h2 style={{ color: '#3A4256' }}>Appointment</h2>
          <Calender value={new Date()} onChange={handleChange}></Calender>
        </div>
        <div className="col-md-6">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Header;