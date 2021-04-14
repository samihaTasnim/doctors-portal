import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const SeeAppointments = () => {

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [appointments, setAppointments] = useState([])

  const handleChange = date => {
    const dateString = date.toDateString()
    setSelectedDate(dateString);
  }

  useEffect(() => {
    fetch('http://localhost:5000/listofappointments' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({selectedDate})
    })
    .then((response) => response.json())
    .then(data => setAppointments(data))
  }, [selectedDate])

  console.log(appointments);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-2">
          Sidebar
        </div>
        <div className="col-md-5">
          <Calendar value={new Date()} onChange={handleChange}></Calendar>
        </div>
        <div className="col-md-5">
          <h3>List of appointments</h3>
          {appointments.length}
        </div>
      </div>
    </div>
  );
};

export default SeeAppointments;