import React, { useState, useEffect } from 'react';
import './FindJobs.css';
import axios from 'axios';
import Navbar from './Navbar';

const FindJobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [file, setFile] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(false);
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

  const handleApplyClick = (job) => {
    setSelectedJob(job);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitApplication = () => {
    console.log('Submitted:', selectedJob, file);

    setSelectedJob(null);
    setFile(null);
    setSubmissionStatus(true);
    setTimeout(() => setSubmissionStatus(false), 3000);
  };

  const handleCloseClick = () => {
    setSelectedJob(null);
  };

  return (
    <>
      <Navbar />
      <hr />
      {jobDetails.map((job) => (
        <div  className='main-div'>
          <div key={job._id} className='div-div'>
            <div className='div1'>
              <h2>Openings for</h2>
            </div>
            <hr />
            <div className='div-div-div'>
              <div className='div-div-1'>
                <h3>Looking For:</h3>
                <p>{job.jobRole}</p>
                <h3>Salary:</h3>
                <p>{job.package}lpa</p>
              </div>
              <div className='div-div-2'>
                <h3>Location:</h3>
                <p>{job.jobLocation}</p>
                <h3>Qualification:</h3>
                <p>{job.qualification}</p>
              </div>
            </div>
            <button
              className='button123'
              onClick={() => handleApplyClick(job)}
            >
              Easy Apply
            </button>
          </div>
        </div>
      ))}

      {selectedJob && (
        <div className='larger-div'>
          <button className='close-button' onClick={handleCloseClick}>X</button>
          <h2>Applying for {selectedJob.jobRole}</h2>
          <p>
            <strong>Work mode:</strong> {selectedJob.workMode}
          </p>
          <p>
            <strong>Skills Required:</strong> {selectedJob.skillsRequired}
          </p>
          <p>
            <strong>Year of Passing:</strong> {selectedJob.yearOfPassing}
          </p>
          <p>
            <strong>Job description:</strong> {selectedJob.jobDescription}
          </p>
          <input type='file' onChange={handleFileChange} />
          <button className="submit-app" onClick={handleSubmitApplication}>Submit Application</button>
        </div>
      )}

      {submissionStatus && (
        <div className='submission-pop-up'>
          <p>Your application has been submitted!</p>
        </div>
      )}
    </>
  );
};

export default FindJobs;
