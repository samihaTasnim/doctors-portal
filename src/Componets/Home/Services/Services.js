import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whittening from '../../../images/whittening.png'
import ServiceCard from './ServiceCard';
import serviceImg from '../../../images/service.png'

const serviceData = [
  {
    title: 'Fluoride Treatment',
    img: fluoride
  },
  {
    title: 'Cavity Filling',
    img: cavity
  },
  {
    title: 'Teeth Whittening',
    img: whittening
  }
]

const Services = () => {
  return (
    <div className="container" style={{marginTop: '10%'}}>
      <div className="row text-center">
        <h5 style={{color: '#3A4256'}}>Our services</h5>
        <br/>
        <br/>
        <h3 style={{color: '#1CC7C1', marginBottom: '8%'}}>Services we provide</h3>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-75">
          {
            serviceData.map(x => <ServiceCard info={x}></ServiceCard>)
          }
        </div>
      </div>
      <section style={{marginTop: '10%', height: '100vh'}} className="d-flex justify-content-center">
        <div className="row w-75">
          <div className="col-md-6">
            <img src={serviceImg} alt="" className="img img-fluid rounded" style={{height: '50%'}}/>
          </div>
          <div className="col-md-6">
            <h3>Exceptional dental care,</h3>
            <h3>On you terms</h3>
            <br/>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quia? Quidem repellendus eum sunt tempore a, autem reiciendis tenetur molestias tempora perspiciatis, consectetur aut modi perferendis dignissimos, explicabo distinctio iste? Debitis odio suscipit facere voluptas soluta. Est eum doloremque iure sunt, debitis ullam earum, numquam iusto dolor amet dolorem deleniti!</p>
            <br/>
            <button className="btn btn-secondary" style={{backgroundColor: '#1CC7C1', borderStyle: 'none'}}>Learn more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;