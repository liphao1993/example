import React, { useContext, useRef } from 'react';

import Slider from 'react-slick';

import { FaQuoteLeft, FaArrowRight, FaArrowLeft, FaHtml5 } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import { experienceData } from '../../data/experienceData';

import './Testimonials.css';

function Testimonials() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            {experienceData.length > 0 && (
                <div
                    className='testimonials'
                    id='testimonials'
                    style={{ backgroundColor: theme.tertiary10 }}
                >
                    <div className='testimonials--body'>
                    <h1 style={{ color: theme.primary }}>Experience</h1>
                        <div
                            className='testimonials--slider'
                            style={{ backgroundColor: theme.tertiary10 }}
                        >
                            <Slider {...settings} ref={sliderRef}>
                                {experienceData.map((test) => (
                                    <div
                                        className='single--testimony'
                                        key={test.id}
                                    >
                                        <div className='testimonials--container'>
                                            <div
                                                className='review--img'
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                    boxShadow: `0px 0px 50px ${theme.primary30}`
                                                }}
                                            >
                                                <img
                                                    src={test.image}
                                                    alt={test.company}
                                                />
                                            </div>
                                            <div
                                                className='review--content'
                                                style={{
                                                    backgroundColor: theme.secondary,
                                                    color: theme.tertiary,
                                                    boxShadow: `0px 0px 30px ${theme.primary30}`
                                                  }}
                                            >
                                                <h4>{test.jobtitle}</h4>
                                                <h1>{test.startYear} - {test.endYear}</h1>
                                                {test.description.map((line, index) => (
                                                <h5 key={index}>
                                                    • {line}
                                                </h5>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button
                                className='prevBtn'
                                onClick={gotoPrev}
                                style={{ 
                                    backgroundColor: theme.tertiary,
                                    boxShadow: '0px 0px 20px white'
                                }}
                            >
                                <FaArrowLeft
                                    style={{ color: theme.tertiary10 }}
                                    aria-label='Previous testimonial'
                                />
                            </button>
                            <button
                                className='nextBtn'
                                onClick={gotoNext}
                                style={{ 
                                    backgroundColor: theme.tertiary, 
                                    boxShadow: '0px 0px 20px white'
                                }}
                            >
                                <FaArrowRight
                                    style={{ color: theme.tertiary10 }}
                                    aria-label='Next testimonial'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;
