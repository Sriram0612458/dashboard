import React, { useState } from 'react';
import './index.css';
import Navbar from '../navbar';
import UserActivity from '../useractivity';
const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div>
                <div className={`sidenav ${isOpen ? 'open' : 'open'}`}>
                    <a href="/home" className='anchor'>Home</a>
                    <a href="/activity" className='anchor'>User Activity</a>
                    <a href="/postactivity" className='anchor'>Post Activity</a>
                </div>
            </div>
        </>
    );
};

export default SideNav;
