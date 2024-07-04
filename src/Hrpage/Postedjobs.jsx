import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Postedjobs.css'; 

const Postedjobs = () => {
  const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    fetchJobDetails();
  }, []);

  const fetchJobDetails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/HrPostJobDetails');
      setJobDetails(response.data);
    } catch (err) {
      console.error('Error fetching job details:', err);
    }
  };

  const handleDeleteClick = async (jobId) => {
    try {
      await axios.delete(`http://localhost:5000/HrPostJobDetails/${jobId}`);
      setJobDetails(jobDetails.filter(job => job._id !== jobId));
    } catch (err) {
      console.error('Error deleting job:', err);
    }
  };

  return (
    <div className='body'>
      <div className="job-list-container">
        <h1>Job Postings</h1>
        <div className="job-list">
          {jobDetails.map(job => (
            <div key={job._id} className="job-item">
              <h2>{job.jobRole}</h2>
              <p><strong>Location:</strong> {job.jobLocation}</p>
              <p><strong>Package:</strong> {job.package}</p>
              <p><strong>Work Mode:</strong> {job.workMode}</p>
              <p><strong>Skills Required:</strong> {job.skillsRequired}</p>
              <p><strong>Year of Passing:</strong> {job.yearOfPassing}</p>
              <p><strong>Qualification:</strong> {job.qualification}</p>
              <p><strong>Percentage:</strong> {job.percentage}</p>
              <p><strong>Job Description:</strong> {job.jobDescription}</p>
              <button 
                className="delete-button" 
                onClick={() => handleDeleteClick(job._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Postedjobs;
