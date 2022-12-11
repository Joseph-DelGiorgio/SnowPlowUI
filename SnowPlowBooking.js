import React, { useState } from 'react';
import './SnowPlowBooking.css';
import './SnowPlowBookingFormStyles.css';


const SnowPlowBooking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Set the initial form submission status to false

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here

    // If the form is valid, submit the data to the server or database

    setIsSubmitted(true); // Set the form submission status to true when the form is submitted
  };

  return (
    <div>
      <h1 className="form-heading">Book Your Snow Plow Timeslot</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" name="name" className="form-input" />

        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" name="email" className="form-input" />

        <label htmlFor="phone" className="form-label">Phone:</label>
        <input type="tel" name="phone" className="form-input" />

        <label htmlFor="address" className="form-label">Address:</label>
        <input type="text" name="address" className="form-input" />

        <label htmlFor="city" className="form-label">City:</label>
        <input type="text" name="city" className="form-input" />

        <label htmlFor="date" className="form-label">Preferred Date:</label>
        <input type="date" name="date" className="form-input" />

        <label htmlFor="time" className="form-label">Preferred Time:</label>
        <input type="time" name="time" className="form-input" />

        <input type="submit" value="Submit" className="form-button" />
      </form>
    </div>
  );
};

export default SnowPlowBooking;
