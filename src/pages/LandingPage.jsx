import React, { useRef } from 'react';
import { Button } from '@mui/material';
import '../assets/css/landing_page.css';
import ScrollToTop from "react-scroll-to-top";
import nasaLogo from '../assets/img/spaceappslogo.png'
import rv1 from '../assets/img/rv1.gif'
import rv2 from '../assets/img/rv2.jpeg'

function App() {
    const scrollToPresentation = useRef(null);
    const handleScrollToPresentation = () => {
        scrollToPresentation.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
            <div className="background">
                <div className="content">
                    <h1 className="title">Hello, Earth!</h1>
                    <p className="subtitle">
                        It’s time to navigate into flying rivers to discover how Earth is connected to <span className="highlight">itself and to people.</span>
                    </p>
                    <Button className="button" onClick={handleScrollToPresentation}>
                        CHECK IT OUT
                    </Button>
                </div>
            </div>
            <div className="earth-section" ref={scrollToPresentation}>
                <div className="text-content">
                    <h2 className="section-title">Our Earth is fully connected.</h2>
                    <p className="section-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <span className="highlight"> Flying rivers </span> are an example of this interconnection, and here you’ll know them better.
                    </p>
                </div>
                <div className="image-content">
                    <img src={rv1} alt="Nature" className="background-image" />
                </div>
            </div>
            <div className="earth-section river-section">
                <div className="image-content">
                    <img src={rv2} alt="Nature" className="background-image" />
                </div>
                <div className="text-content">
                    <h2 className="section-title">Flying rivers: connecting the Earth.<br></br>And its people.</h2>
                    <p className="section-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <span className="highlight"> Flying rivers </span> are an example of this interconnection, and here you’ll know them better.
                    </p>
                </div>
            </div>
            <footer>
                <div className="left">
                    <p>Resources</p>
                    <ul>
                        <li>Our GitHub repo</li>
                        <li>NASA Space Apps' Project Page</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className="right">
                    <img src={nasaLogo} alt="" />
                    <p>This project is part of NASA International Space Apps Challenge '24.</p>
                </div>
            </footer>
            <ScrollToTop smooth />
        </>
    );
}

export default App;
