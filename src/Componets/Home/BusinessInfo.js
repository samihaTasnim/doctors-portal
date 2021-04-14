import React from 'react';
import InfoCard from './InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData = [
  {
    title: 'Opening hours',
    description: 'We are always open',
    icon: faClock,
    background: 'primary'
  },
  {
    title: 'Visit us',
    description: 'Brooklyn, NY 10053 USA',
    icon: faMapMarker,
    background: 'dark'
  },
  {
    title: 'Call us',
    description: '+1 212-545-5700',
    icon: faPhone,
    background: 'primary'
  }
]

const BusinessInfo = () => {
  return (
    <div className="container my-5">
      <section className="row">
      {
        infoData.map(info => <InfoCard info={info}></InfoCard>)
      }
      </section>
    </div>
  );
};

export default BusinessInfo;