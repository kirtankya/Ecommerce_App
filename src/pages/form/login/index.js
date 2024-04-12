import React, { useEffect, useState } from 'react';
import './login.scss';
import emailjs from '@emailjs/browser';

import image from '../../../assets/images/Side Image.png';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
  const [data1, setData1] = useState({
    email: '',
    password: ''
  });
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loginData') === 'true');

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem('data'));
    if (storeData) {
      setData1(storeData);
    }
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (data && data1.email === data.email && data1.password === data.password) {
      localStorage.setItem('data1', JSON.stringify(data1));
      localStorage.setItem('loginData', 'true');
      setIsLoggedIn(true);
      toast.success("Logged in successfully!", {
        position: 'top-right'
      });
      console.log("Navigating to home page...");
      navigate('/home');
    } else {
      toast.error("Invalid email or password!", {
        position: "top-right"
      });
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setIsLoggedIn(false);
    toast.success("Logged out successfully!", {
      position: 'top-right'
    });
    navigate('/login');
  };

  return (
    <div className='signup_form'>
      <div className="container">
        <div className="form_aligment1">
          <div className="form_image">
            <img className="img-fluid" src={image} alt="" />
          </div>
          <div className="signup_form_main">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
            <form onSubmit={handleSubmit}>
              <input type="email" onChange={handleChange} placeholder='Enter Your Email' name="email" value={data.email} />
              <input type="password" onChange={handleChange} placeholder='Enter Your Password' name="password" value={data.password} />
              <div className="aligment">
                <div className="login_button">
                  <button type="submit">Login</button>
                  <ToastContainer />
                </div>
                <div className="forget_password">
                  <a href='/login'>Forget PassWord?</a>
                </div>
              </div>
              {isLoggedIn ? (
                <button style={{ width: '150px', height: '40px', backgroundColor: '#ec4646', marginTop: '10px', border: 'none', borderRadius: '5px', color: 'white' }} className='login_button' onClick={handleLogout}>Logout</button>
              ) : (
                <span>Don't have an account? <Link className='login' to={`/signup`}>Sign Up</Link></span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
