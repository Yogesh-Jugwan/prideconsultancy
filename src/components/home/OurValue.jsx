import React from 'react'
import Slider from 'react-slick';
import { IdeatorsSvg, ProblemSolversSvg, TimeBoundSvg, ValueGiversSvg } from '../svgIcons/svg';
const OurValue = () => {
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>{/*====== Why Choose ======*/}
            <section className="padding-60 bg-light">
                <div className="container">
                    <div className="title">
                        <span>Our Value</span>
                        <h2>What Makes Us Unique</h2>
                        <p>At the heart of Pride is a team of dreamers and doers who are laser-focused on delivering value to clients. We have a collective can-do attitude, the right skills to conquer challenges and the integrity to do the right thing always.</p>
                    </div>
                    <div className="Feature-slider  p-relative o-hidden" >
                        <Slider {...settings2}>
                            <div className="item" >
                                <div className="why-choose-box">
                                   <ProblemSolversSvg/>
                                    <h5>Commitment</h5>
                                    <p>Keep Pursuing your goals, especially when experiencing adversity.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="why-choose-box">
                                   <TimeBoundSvg/>
                                    <h5>Integrity</h5>
                                    <p>Take Pride in everything that's fair, honest and knowledgeable and build trust in every situation. </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="why-choose-box">
                                    <ValueGiversSvg/>
                                    <h5>Competency </h5>
                                    <p>Thirst for knowledge and self-improvement and demonstrate the skills needed to accomplish a chosen task.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="why-choose-box">
                                   <IdeatorsSvg/>
                                    <h5>Innovations  &amp;  Change</h5>
                                    <p>Encourage Innovation to adapt to change and be willing to take the risk.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="why-choose-box">
                                   <IdeatorsSvg/>
                                    <h5>Excellence</h5>
                                    <p>endeavor for quality in everything we do.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            {/*====== End Why Choose ======*/}</div>
    )
}

export default OurValue