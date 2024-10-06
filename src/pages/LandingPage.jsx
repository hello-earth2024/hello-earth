import React, { useRef } from 'react';
import { Button } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import '../assets/css/landing_page.css';
import ScrollToTop from "react-scroll-to-top";
import nasaLogo from '../assets/img/spaceappslogo.png'
import rv1 from '../assets/img/rv1.gif'
import rv2 from '../assets/img/rv2.jpeg'

function LandingPage() {
    const scrollToPresentation = useRef(null);
    const handleScrollToPresentation = () => {
        scrollToPresentation.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
            <div className="background">
                <div className="content">
                    <h1 className="title">
                        <Typewriter
                            cursor
                            cursorBlinking
                            cursorColor="#ffffff"
                            delaySpeed={1000}
                            deleteSpeed={50}
                            loop={0}
                            typeSpeed={100}
                            words={[
                                'Hello, Earth!',
                            ]}
                        />
                    </h1>
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
                        Imagine Earth as a <span className="highlight">big puzzle</span>, where each piece is important so that everything works in harmony. In this puzzle, the air we breathe, the forests, the ocean, and even the little soil worms are <span className="highlight">connected</span>. Each piece (or system) of our planet influences and is influenced by the others, building what we call a <span className="highlight">system of systems</span>. In this reasoning, think about the climate crisis we live as <span className="highlight">changes</span> on these systems, where a little, single change in one of them can affect all others and, together, cause <span className="highlight">global catastrophes</span>.
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
                        Water is constantly on the move, flowing from rivers to oceans, shaping how societies function along the way. But water doesn't just travel on land — it also moves through the sky, offering us a new perspective on how <span className="highlight">climate change is affecting everything</span>. This brings us to the concept of <span className="highlight">Flying Rivers</span>. These are powerful streams of water vapor that form above rainforests like the Amazon and travel across large, continental distances, bringing moisture to regions <span className="highlight">far from their source</span>. These invisible rivers play a critical role in maintaining rainfall patterns, supporting agriculture, and sustaining biodiversity across continents. As deforestation and climate change continue to disrupt these natural systems, it's more important than ever <span className="highlight">to understand and protect flying rivers</span> for the sake of ecosystems and the people who rely on them.

                    </p>
                </div>
            </div>
            <footer>
                <div className="wrapper">
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
                </div>
                <p>Made with ❤️ from 🇧🇷 to the 🌎<br></br>&copy; Hello, Earth! Team, 2024.</p>
            </footer>
            <ScrollToTop smooth />
        </>
    );
}

export default LandingPage;
