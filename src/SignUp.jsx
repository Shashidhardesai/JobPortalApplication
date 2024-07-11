import React, { useState } from 'react';
import './SignUp.css'
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstname.match(/^[a-zA-Z]+$/)) {
      errors.firstname = 'should contain only alphabets';
      isValid = false;
    }
    if (!formData.lastname.match(/^[a-zA-Z]+$/)) {
      errors.lastname = 'should contain only alphabets';
      isValid = false;
    }
   
    if (!formData.email.toLowerCase().endsWith('@gmail.com')) {
      errors.email = 'Invalid email (must end with @gmail.com)';
      isValid = false;
    }

    if (!formData.password.match(/[A-Z]/)) {
      errors.password = 'Password should contain at least one uppercase letter';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/signup', formData);
        
        if (response.status === 201) {
          setFormData({
            firstname: '',
            lastname: '',
            email: '',
            password: ''
          });
          console.log('Signup successful!');
        } else {
          console.error('Signup failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };
  

  return (
    <div className='signup-container'>
      <form onSubmit={handleSubmit}>
        <h1 className='head'>Signup Form</h1>
        <div className="inputt">
          <label htmlFor="firstname" className="labe">Firstname:</label><br />
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
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
            value={formData.lastname}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
       {/* <Link to="/HomePage"> */}
       <button type="submit" className="Button">Sign up</button>
       {/* </Link>  */}
      </form>
    </div>
  );
};

export default SignUp;
