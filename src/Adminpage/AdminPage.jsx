import React from 'react';
import './AdminPage.css';
import { Link } from 'react-router-dom';

const AdminPage = () => {
    return (
        <div className="admin-page">
            <nav className="admin-navbar">
                <h1 className="navbar-brand">Admin Panel</h1>
                <div className="navbar-buttons">
                  <Link to="/PostedJobs"><button className="nav-button">Job Postings</button></Link>  
                    <button className="nav-button">Student Resumes</button>
                  <Link to="/AdminLogin" > <button className="nav-button">Logout</button></Link>
                </div>
            </nav>
            <div className="content">
                <h1>Welcome to the Admin Panel</h1>
                <p>Good management is the art of making problems so interesting and <br/>
                their solutions so constructive that everyone wants to get to work and deal with them</p>
            </div>
        </div>
    );
};

export default AdminPage;
