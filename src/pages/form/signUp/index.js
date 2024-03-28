import React, { useEffect, useState } from 'react';
import './signUp.scss';
import image from '../../../assets/images/Side Image.png';
import google from '../../../assets/icons/Icon-Google.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('data'));
        if (storedData) {
            setData(storedData);
        }
    }, []);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        localStorage.setItem('data', JSON.stringify(data));
        navigate(`/login`);
    };


    return (
        <div className='signup_form'>
            <div className="container">
                <div className="form_aligment">
                    <div className="form_image">
                        <img className='img-fluid' src={image} alt="" />
                    </div>
                    <div className="signup_form_main">
                        <h1>Create an account</h1>
                        <p>Enter your details below</p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" onChange={handleChange} placeholder='Enter Your Name' name="name" /><br />
                            <input type="email" onChange={handleChange} placeholder='Enter Your Email' name="email" /><br />
                            <input type="password" onChange={handleChange} placeholder='Enter Your Password' name="password" />
                            <div className="Signup_button">
                                <button type="submit">Create An Account</button>
                            </div>
                            <div className="Google_button">
                                <button>
                                    <div className="button_aligment">
                                        <img src={google} alt="google" />
                                        <p>Sign Up With Google</p>
                                    </div>
                                </button>
                            </div>
                        </form>
                        <span>Already have an account? <Link className='login' to={`/login`}>Log in</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
