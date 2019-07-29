
import React, { useState, useEffect } from 'react';
// import './App.css';
import desktopImage from '../../static/background-desktop.jpg';
import mobileImage from '../../static/background-mobile.jpg';
import Fronttext from '../images/frontpage_text.svg'

const test = () => {
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

    return (
        <div className="test" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="fronttext-img"><img src={Fronttext} alt="I'm Anes"/>
                <h1>Human being & Web Developer</h1>
            </div>
        </div>
    );
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
};

export default test;
