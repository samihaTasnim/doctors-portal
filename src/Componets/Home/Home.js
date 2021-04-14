import React from 'react';
import BusinessInfo from './BusinessInfo';
import Hero from './Hero';
import Appointment from './Services/Appointment';
import Services from './Services/Services';
import Testimonail from './Testimonail';

const Home = () => {
  return (
    <div>
       <Hero></Hero>
      <BusinessInfo></BusinessInfo>
      <Services></Services>
      <Appointment></Appointment>
      <Testimonail></Testimonail>
    </div>
  );
};

export default Home;