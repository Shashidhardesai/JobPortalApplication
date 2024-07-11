import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.blur(); 
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!password.match(/[A-Z]/)) {
      errors.password = 'Password should contain at least one uppercase letter';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  useEffect(() => {
    findAccount();
  }, []);

  const findAccount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/signup');
      setDetails(response.data);
    } catch (err) {
      console.error('Error fetching account detailss:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const account = details.find(
        (detail) => detail.email === username && detail.password === password
      );
      if (username.startsWith('ADM')) {
        navigate('/AdminPage');
      } else if (username.startsWith('HR')) {
        navigate('/Hrpage');
      } else if (account) {
        navigate('/FrontPage');
      } else {
        setErrors({ login: 'Invalid username or password' });
      }
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <h1 className='headd'>Login Form</h1>
        <div className="inputt">
          <label htmlFor="username" className="labe">Username:</label><br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter the mail"
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="inputt">
          <label htmlFor="password" className="labe">Password:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {errors.login && <p className="error">{errors.login}</p>}
        <button type="submit" className="Button">Login</button>
      </form>
    </div>
  );
};

export default Login;
