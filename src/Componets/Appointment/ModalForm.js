import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const ModalForm = ({ modalIsOpen, closeModal, date, subject }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    data.service = subject
    data.date = date;
    console.log(data);
    fetch('http://localhost:5000/addappointments' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((success) => {
      if(success) {
        closeModal()
        alert('Your appointment was submitted successfully')
      }
    })
  }


  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <h2 className="text-center text-brand">{subject}</h2>
        <p className="text-secondary text-center"><small>ON {date}</small></p>

        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
          <label htmlFor="name">Name:</label>
          <input {...register("name")} />
          <select className="form-select" aria-label="Default select example" {...register("gender")}>
            <option defaultValue="male">Gender</option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <label htmlFor="age">Age:</label>
          <input type="number" {...register("age", { min: 2, max: 99 })} />
          <br/>
          <input type="submit" className="btn btn-secondary"/>
        </form>

      </Modal>
    </div>
  );
};

export default ModalForm;