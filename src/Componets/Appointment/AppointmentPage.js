import React, { useState } from 'react';
import BookingAppointment from './BookingAppointment';
import Header from './Header';

const AppointmentPage = () => {

  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleChange = date => {
    setSelectedDate(date);
  }

  return (
    <div>
    <Header handleChange={handleChange}></Header>
    <BookingAppointment date={selectedDate}></BookingAppointment>
    </div>
  );
};

export default AppointmentPage;