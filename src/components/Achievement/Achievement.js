import React, { useContext } from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData';
import AchievementCard from './AchievementCard';
import Marquee from "react-fast-marquee";

function Achievement() {
    const { theme } = useContext(ThemeContext);
    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`,
    };

    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{ backgroundColor: theme.secondary }}>
                    <div className="achievement-body">
                        <h1 style={{ color: theme.primary }}>Education</h1>
                    </div>
                    <div className="skill--scroll" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {achievementData.achievements.map((data, id) => (
                                <div className="skill--box" key={id} style={skillBoxStyle}>
                                    <img src={data.image} alt={data.details} />
                                    <h3 style={{ color: theme.tertiary }}>
                                        {`${data.title} `}
                                    </h3>
                                    <h3 style={{ color: theme.tertiary }}>
                                        {`${data.details}`}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Achievement;
