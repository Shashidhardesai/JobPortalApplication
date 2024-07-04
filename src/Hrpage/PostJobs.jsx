import React, { useState } from 'react';
import axios from 'axios';
import './PostJobs.css';

const PostJobs = () => {
  const [formData, setFormData] = useState({
    jobRole: '',
    jobLocation: '',
    package: '',
    workMode: '',
    skillsRequired: '',
    yearOfPassing: '',
    qualification: '',
    percentage: '',
    jobDescription: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/HrPostJobDetails', formData);
      console.log('Form Data Submitted:', response.data);
      setFormData({
        jobRole: '',
        jobLocation: '',
        package: '',
        workMode: '',
        skillsRequired: '',
        yearOfPassing: '',
        qualification: '',
        percentage: '',
        jobDescription: ''
      });
      setIsModalOpen(true);
      console.log('form data:', formData);
    } catch (err) {
      console.error('Error submitting form data:', err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='body'>
      <div className="job-form-container">
        <h1>Post a Job</h1>
        <form className="post-form" onSubmit={handleSubmit}>
          <label>
            Job Role:
            <input type="text" name="jobRole" value={formData.jobRole} onChange={handleChange} required />
          </label>
          <label>
            Job Location:
            <input type="text" name="jobLocation" value={formData.jobLocation} onChange={handleChange} required />
          </label>
          <label>
            Package:
            <input type="text" name="package" value={formData.package} onChange={handleChange} required />
          </label>
          <label>
            Work Mode:
            <input type="text" name="workMode" value={formData.workMode} onChange={handleChange} required />
          </label>
          <label>
            Skills Required:
            <input type="text" name="skillsRequired" value={formData.skillsRequired} onChange={handleChange} required />
          </label>
          <label>
            Year of Passing:
            <input type="text" name="yearOfPassing" value={formData.yearOfPassing} onChange={handleChange} required />
          </label>
          <label>
            Qualification:
            <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
          </label>
          <label>
            Percentage:
            <input type="text" name="percentage" value={formData.percentage} onChange={handleChange} required />
          </label>
          <label>
            Job Description:
            <input type="text" name="jobDescription" 
            value={formData.jobDescription} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', minHeight: '100px' }}
            required />
          </label>
          <button className="post-button" type="submit">Submit</button>
        </form>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Form Submitted</h2>
            <p>Your job posting has been successfully submitted!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostJobs;
