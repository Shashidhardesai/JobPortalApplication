import React, { useEffect, useState } from 'react';
import './UploadResume.css';

const UploadResume = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchPdfFiles();
  }, []);

  const fetchPdfFiles = async () => {
    try {
      const response = await fetch('http://localhost:5000/pdfFiles');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error('Error fetching PDF files:', error);
    }
  };

  const handlePdfClick = (file) => {
    console.log('Selected file URL:', file.pdfFile);
    setSelectedFile(file);
  };

  const closePopup = () => {
    setSelectedFile(null);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Student Applications</h1>
      </header>
      <div className="content">
        <ul className="pdf-list">
          {files.map((file, index) => (
            <li key={file._id} className="pdf-item">
              <button className="pdf-button" onClick={() => handlePdfClick(file)}>
                PDF File {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedFile && (
        <div className="pdf-popup">
          <div className="pdf-popup-content">
            <button className="close-btn" onClick={closePopup}>x</button>
            <embed
              src={`http://localhost:5000${selectedFile.pdfFile}`}
              type="application/pdf" 
              title="PDF Viewer"
            ></embed>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadResume;
