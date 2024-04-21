// FormPage.js

import React, { useState } from 'react';
import './FormPage.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    image1: null,
    image2: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Join Meeting Room</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="label-input">
            <label htmlFor="field1">First Name:</label>
            <input
              className='textbox'
              type="text"
              id="field1"
              name="field1"
              value={formData.field1}
              onChange={handleChange}
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="label-input">
            <label htmlFor="field2">Last Name:</label>
            <input
              className='textbox'
              type="text"
              id="field2"
              name="field2"
              value={formData.field2}
              onChange={handleChange}
              placeholder="Enter Last Name"
              required
            />
          </div>
          <div className="label-input">
            <label htmlFor="field3">Email Address:</label>
            <input
              className='textbox'
              type="text"
              id="field3"
              name="field3"
              value={formData.field3}
              onChange={handleChange}
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="label-input">
            <label htmlFor="field4">Meeting Room ID/URL:</label>
            <input
              className='textbox'
              type="text"
              id="field4"
              name="field4"
              value={formData.field4}
              onChange={handleChange}
              placeholder="Enter Meeting Room ID/URL"
              required
            />
          </div>
          <div className="label-input">
            <label htmlFor="image1">Upload Your CV:</label>
            <input
              type="file"
              id="image1"
              name="image1"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>
          <div className="label-input">
            <label htmlFor="image2">Upload Proof of Identification(Driving Licence/ NIC):</label>
            <input
              type="file"
              id="image2"
              name="image2"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
