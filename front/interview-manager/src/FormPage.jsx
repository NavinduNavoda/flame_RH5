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
    <div className="form-container pt-[130px] flex-col justify-center">
      <h2 className='text-[32px]'>Join Meeting Room</h2> <br />
      <form onSubmit={handleSubmit} className='w-[100%]'>
        <div className="ml-[300px]">
          <div className="label-input w-[600px]">
            <label htmlFor="field1">First Name:</label>
            <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'
              type="text"
              id="field1"
              name="field1"
              value={formData.field1}
              onChange={handleChange}
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="label-input w-[600px]">
            <label htmlFor="field2">Last Name:</label>
            <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'

              type="text"
              id="field2"
              name="field2"
              value={formData.field2}
              onChange={handleChange}
              placeholder="Enter Last Name"
              required
            />
          </div>
          <div className="label-input w-[600px]">
            <label htmlFor="field3">Email Address:</label>
            <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'

              type="text"
              id="field3"
              name="field3"
              value={formData.field3}
              onChange={handleChange}
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="label-input w-[600px]">
            <label htmlFor="field4">Meeting Room ID/URL:</label>
           <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'

              type="text"
              id="field4"
              name="field4"
              value={formData.field4}
              onChange={handleChange}
              placeholder="Enter Meeting Room ID/URL"
              required
            />
          </div>
          <div className="label-input w-[600px]">
            <label htmlFor="image1">Upload Your CV:</label>
            <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'

              type="file"
              id="image1"
              name="image1"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>
          <div className="label-input w-[600px]">
            <label htmlFor="image2">Upload Proof of Identification(Driving Licence/ NIC):</label>
            <input className='mb-[10px] p-[10px] bg-white border-2 border-gray-300 rounded-md w-[300px]'
              type="file"
              id="image2"
              name="image2"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>
        </div>
        <button className='text-white w-[100px]' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
