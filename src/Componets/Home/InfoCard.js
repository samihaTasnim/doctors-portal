import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 text-white">
      <div className={`row info-${info.background} g-1 rounded p-4 text-center`}>
        <div className="col-md-6 w-25">
          <FontAwesomeIcon icon={info.icon} size="4x"/>
        </div>
        <div className="col-md-6">
          <h5>{info.title}</h5>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;