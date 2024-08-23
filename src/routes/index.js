import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "./defaultlayout";
import Home from "../pages";
import Login from "../pages/form/login";
import Signup from "../pages/form/signUp";
import Contact from "../pages/contact";
import About from "../pages/about";
import ProductItems from "../pages/home/productItems";
import Cart from "../shared/componet/cart";
import { Provider } from "react-redux";
import store from "../redux/store";

function RouterComponent() {
    const [loginData, setLoginData] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('loginData');
        if (loggedIn === 'true') {
            setLoginData(true);
        }
    }, []);

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

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<DefaultLayout loginData={loginData} onLogout={handleLogout} />}>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/products/:id" element={<ProductItems />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/cart" element={<Cart />} />
                    </Route>
                    <Route path="*" element={loginData ? <Navigate to="/" /> : <Navigate to="/login" />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default RouterComponent;
