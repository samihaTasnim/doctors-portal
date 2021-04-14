import React from 'react';

const ServiceCard = ({info}) => {
  return (
    <div className="col-md-4 text-center">
      <img src={info.img} alt=""/>
      <br/>
      <br/>
      <h4>{info.title}</h4>
      <br/>
      <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, molestiae.</p>
    </div>
  );
};

export default ServiceCard;