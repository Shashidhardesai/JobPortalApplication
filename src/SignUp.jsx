import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp= () => {
  const [firstname, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!firstname.match(/^[a-zA-Z]+$/)) {
      errors.firstname = 'should contain only alphabets';
      isValid = false;
    }
    if (!lastname.match(/^[a-zA-Z]+$/)) {
      errors.lastname = 'should contain only alphabets';
      isValid = false;
    }
   
    if (!email.toLowerCase().endsWith('@gmail.com')) {
      errors.email = 'Invalid email (must end with @gmail.com)';
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
      setUsername('');
      setLastname('')
      setPassword('');
      setEmail('')
    }
  };

  return (
    <>
    <div className='signup-container'>
     
      <form onSubmit={handleSubmit}>
      <h1 className='head'>Signup Form</h1>
        <div className="inputt">
          <label htmlFor="username" className="labe">Firstname:</label><br />
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={handleUsernameChange}
            placeholder="Enter the mail"
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>
        <div className="inputt">
          <label htmlFor="lastname" className="labe">Lastname:</label><br />
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={handleLastnameChange}
            placeholder="Enter lname"
          />
          {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>
        <div className="inputt">
          <label htmlFor="email" className="labe">E-mail:</label><br />
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
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
      <Link to="/HomePage"><button type="submit" className="Button">Sign up</button></Link> 
      </form>
    </div>
    </>
  );
};

export default SignUp;
