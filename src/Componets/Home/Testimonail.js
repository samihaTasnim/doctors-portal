import React from 'react';
import person1 from '../../images/person 1.png'
import person2 from '../../images/person 2.png'
import person3 from '../../images/person 3.png'
import TestimonialCard from './TestimonialCard';

const testimoniamData = [
  {
    name: "Elio O'brien",
    img: person1
  },
  {
    name: "Bella Mosby",
    img: person2
  },
  {
    name: "Lin Hao",
    img: person3
  }
]

const Testimonail = () => {
  return (
    <div className="container" style={{marginTop:'8%'}}>
      <div className="row">
        <h5 style={{color: '#3A4256'}}>Testimonail</h5>
        <br/>
        <br/>
        <h3 style={{color: '#1CC7C1', marginBottom: '8%'}}>What our paitents say</h3>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          testimoniamData.map(x => <TestimonialCard data={x}></TestimonialCard>)
        }
      </div>
    </div>
  );
};

export default Testimonail;