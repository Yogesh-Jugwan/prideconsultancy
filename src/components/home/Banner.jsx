import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
const Banner = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        fade: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
    };
    return (
        <div> {/*====== Banner ======*/}
            <section className="banner_section">
                <Slider {...settings}>
                    <div className="banner home">
                        <div className="video">
                            <img className="lazy" src="/assets/image/home/1.App Development.png" alt="Web and mobile App Development Company in the india" />
                        </div>
                        <div className="tenc-intro-main__wrapper">
                            <div className="container">
                                <h1 >Marvelous Mobile App Development 
                                <br/>Company In India. </h1>
                                <p>Pre-Eminent, Unbeaten, Perfect and Par<br/>Excellence Mobile Apps Development Company in India.</p>
                                <Link to="/mobile-application-development" title className="btn waves-effect waves-light btn-custome mb-3">Explore More</Link>
                                <Link to="/contact" title className="btn waves-effect waves-light btn-custome  mb-3">Get in Touch</Link>
                            </div>
                        </div>
                    </div>
                    <div className="banner home">
                        <div className="video">
                            <img className="lazy" src="/assets/image/home/2.Web Designing.png" alt="Web and mobile App Development Company in the india" />
                        </div>
                        <div className="tenc-intro-main__wrapper">
                            <div className="container">
                                <h1>Ultimate Web Development<br/> Company In India.</h1>
                                <p>Finest, Peerless, Optimum, and <br/> Highest Quality Web Development Company In India.</p>
                                <Link to="/mobile-application-development" title className="btn waves-effect waves-light btn-custome mb-3">Explore More</Link>
                                <Link to="/contact" title className="btn waves-effect waves-light btn-custome  mb-3">Get in Touch</Link>
                            </div>
                        </div>
                    </div>
                    <div className="banner home">
                        <div className="video">
                            <img className="lazy" src="/assets/image/home/3.Hiring.png" alt="Web and mobile App Development Company in the india" />
                        </div>
                        <div className="tenc-intro-main__wrapper">
                            <div className="container">
                                <h1>Greatest Job Placement & Consultancy<br/> Agency in India.</h1>
                                <p>Best Quality of Service,<br/> Prime Recruitment, Masterly in Hiring <br/>and Superlative Job Consultancy Services in India.</p>
                                <Link to="/mobile-application-development" title className="btn waves-effect waves-light btn-custome mb-3">Explore More</Link>
                                <Link to="/contact" title className="btn waves-effect waves-light btn-custome  mb-3">Get in Touch</Link>
                            </div>
                        </div>
                    </div>
                    <div className="banner home">
                        <div className="video">
                            <img className="lazy" src="/assets/image/home/4.Digital Marketing.png" alt="Web and mobile App Development Company in the india" />
                        </div>
                        <div className="tenc-intro-main__wrapper">
                            <div className="container">
                                <h1>Tremendous Digital Marketing <br/>Agency in India.</h1>
                                <p>Premier, Trending, Sterling, and <br/>Foremost Digital Marketing Company in India.</p>
                                <Link to="/mobile-application-development" title className="btn waves-effect waves-light btn-custome mb-3">Explore More</Link>
                                <Link to="/contact" title className="btn waves-effect waves-light btn-custome  mb-3">Get in Touch</Link>
                            </div>
                        </div>
                    </div>
                    <div className="banner home">
                        <div className="video">
                            <img className="lazy" src="/assets/image/home/5.UX and UI.png" alt="Web and mobile App Development Company in the india" />
                        </div>
                        <div className="tenc-intro-main__wrapper">
                            <div className="container">
                                <h1>Magnificent UI/UX and Graphic<br/> Designing Company in India.</h1>
                                <p>Perfectly crafted, creative and <br/>innovative Augmented Reality, Virtual<br/> Reality, Android and iPhone App Development Solutions.</p>
                                <Link to="/mobile-application-development" title className="btn waves-effect waves-light btn-custome mb-3">Explore More</Link>
                                <Link to="/contact" title className="btn waves-effect waves-light btn-custome  mb-3">Get in Touch</Link>
                            </div>
                        </div>
                    </div>
                    <div className="banner home">
                        <div className="video">
                            <img className="lazy" src="/assets/image/home/6.Business Consultant.png" alt="Web and mobile App Development Company in the india" />
                        </div>
                        <div className="tenc-intro-main__wrapper">
                            <div className="container">
                                <h1>Premier Business Consultancy in India. </h1>
                                <p>Marketing, Finance, HR, Strategy & <br/>Business Transformation Agency in India.</p>
                                <Link to="/mobile-application-development" title className="btn waves-effect waves-light btn-custome mb-3">Explore More</Link>
                                <Link to="/contact" title className="btn waves-effect waves-light btn-custome  mb-3">Get in Touch</Link>
                            </div>
                        </div>
                    </div>
                </Slider>
                   
            </section>

            {/*====== End Banner ======*/}</div>
    )
}

export default Banner