import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import Marquee from "react-fast-marquee";

import { expertiseData } from '../../data/expertiseData'



function About() {

    const { theme } = useContext(ThemeContext);
    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}</p>
                </div>
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={90} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {expertiseData.map((expertiseData, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={expertiseData.image} alt={expertiseData.description} />
                                <h3 style={{color: theme.tertiary}}>
                                    {expertiseData.description}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
        

    )
}

export default About
