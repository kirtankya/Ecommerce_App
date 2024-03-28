import React, { useEffect, useState } from "react";
import DefaultLayout from "./defaultlayout";
import Home from "../pages";
import Login from "../pages/form/login";
import Signup from "../pages/form/signUp";
import Contact from "../pages/contact";
import About from "../pages/about";
import ProductItems from "../pages/home/productItems";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cart from "../shared/componet/cart";


function RouterComponent() {
    const [loginData, setLoginData] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('loginData');
        if (loggedIn === 'true') {
            setLoginData(true);
        }
    }, [loginData]);

    const handleLogin = () => {
        setLoginData(true);
        localStorage.setItem('loginData', 'true');
        console.log("User logged in");
    };

    const handleLogout = () => {
        setLoginData(false);
        localStorage.removeItem('loginData');
        console.log("User logged out");
    };

    console.log("loginData:", loginData);

    const [cart, setCart] = useState([])


    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<DefaultLayout loginData={loginData} onLogout={handleLogout} />}>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        {loginData ? (
                            <>
                                <Route path="/home" element={<Home />} />
                                <Route path="/products/:id" element={<ProductItems cart={cart} setCart={setCart} />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/cart" element={<Cart cart={cart} />} />

                            </>
                        ) : (
                            <Route path="*" element={<Navigate to="/login" />} />
                        )}
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default RouterComponent;
