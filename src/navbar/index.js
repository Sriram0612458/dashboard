
import React from 'react';

import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import './index.css';

const Navbar = () => {
    let navigate = useNavigate();
    const logout = () => {
        Cookies.remove("jwt_token")
        navigate("/login")
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <h1 className='company-logo'>Sociality</h1>
                </div>
                <div className='logo-container'>
                    <div className='logo-container'><h3 className='mini-heading'>Rahul</h3>
                        <img src="https://res.cloudinary.com/dtvqmmc3d/image/upload/v1723356542/Male_Student_irvebr.png" className="logo" /></div>
                    <button className='logout-button' onClick={logout}>Logout</button></div>


            </nav>
            <hr />
        </>
    );
};

export default Navbar;