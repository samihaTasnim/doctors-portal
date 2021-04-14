import React from 'react';

const TestimonialCard = ({data}) => {
  return (
    <div className="col-md-4 card">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem at mollitia adipisci vero eligendi quaerat? Esse soluta nam cumque cum, debitis laboriosam. Quo, a!</p>
      <div className="row">
        <div className="col-md-4">
          <img src={data.img} alt=""/>
        </div>
        <div className="col-md-8 card-footer bg-transparent border-secondary">
          <p>{data.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;