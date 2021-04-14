import React, { useState } from 'react';
import ModalForm from './ModalForm';


const BookingCard = ({data, date}) => {

  const [modalIsOpen,setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3">
        <div className="card-body text-center">
          <h5 style={{color: '#1CC7C1'}}>{data.subject}</h5>
          <h5>{data.visitingHour}</h5>
          <p>{data.totalSpace} appointments available</p>
          <button onClick={openModal} className="btn btn-secondary text-uppercase info-primary" >Book now</button>
          <ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal} date={date} subject={data.subject}></ModalForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;