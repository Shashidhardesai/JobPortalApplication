import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!username.match(/^[a-zA-Z]+$/)) {
      errors.username = 'Username should contain only alphabets';
      isValid = false;
    }

    if (!password.match(/[A-Z]/)) {
      errors.password = 'Password should contain at least one uppercase letter';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // alert(`Username: ${username}\nPassword: ${password}`);
      setUsername('');
      setPassword('');
    }
  };

  return (
    <>
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
       <Link to="/FrontPage"><button type="submit" className="Button">Login</button></Link> 
      </form>
    </div>
    </>
  );
};

export default Login;
