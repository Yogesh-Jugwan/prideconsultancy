import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
    return (
        <div>  <main>
            <section className="footer-main">
                {/*====== Footer top ======*/}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12 order-2 foot-center-col">
                                <div className="foot-exp-wrap text-right">
                                    <div className="foot-exp-box d-flex">

                                        <div className="foot-exp-text-wrap text-center">
                                            <div className="foot-exp-text-button rounded10 mb-30">
                                                <span className="exp">Experience</span>
                                                <span className="indus">in the Industry</span>
                                            </div>
                                            <Link className="btn-custome btn btn-lg waves-effect waves-light" to="/app-development-cost-calculator">Discuss Your Project</Link>
                                        </div>
                                    </div>
                                    <div className="foot-social text-center">
                                        <ul className="header_social">
                                            <li>
                                                <Link title="Facebook" to="https://www.facebook.com/" rel="noopener noreferrer" target="_blank" className="fab fa-facebook-f" ></Link>
                                            </li>
                                            <li>
                                                <Link title="Instagram" to="https://www.instagram.com//" rel="noopener noreferrer" target="_blank" className="fab fa-instagram" />
                                            </li>
                                            <li>
                                                <Link title="Twitter" to="https://twitter.com/" rel="noopener noreferrer" target="_blank" className="fab fa-twitter" ></Link>
                                            </li>
                                            <li>
                                                
                                                <Link title="Linkedin" to="https://www.linkedin.com/company/" rel="noopener noreferrer" target="_blank" className="fab fa-linkedin-in" ></Link>
                                            </li>
                                            {/* <li>
                                                <Link title="Behance" to="https://www.behance.net/" rel="noopener noreferrer" target="_blank" className="fab fa-behance" />
                                            </li> */}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 order-0 foot-center-col text-center text-sm-left">
                                <div className="foot-menu">
                                    <h4>Expertise</h4>
                                    <ul>
                                        <li><Link to="/mobile-application-development">Mobile App Development</Link></li>
                                        <li><Link to="/web-development">Web App Development</Link></li>
                                        <li><Link to="/game-development">Mobile Games Development</Link></li>
                                        <li><Link to="/augmented-reality-app-development">Augmented Reality Development</Link></li>
                                        <li><Link to="/virtual-reality-app-development">Virtual Reality</Link></li>
                                        <li><Link to="/startup-mvp-development">Startup MVP</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 order-1 foot-center-col text-center text-sm-left">
                                <div className="foot-menu">
                                    <h4>Solution</h4>
                                    <ul>
                                        <li><Link to="/chat-instant-messaging-app-development">Instant Messaging</Link></li>
                                        <li><Link to="/car-wash-app-development">On-demand Car Wash</Link></li>
                                        <li><Link to="/health-fitness-app-development">Health &amp; Fitness</Link></li>
                                        <li><Link to="/taxi-app-development">Taxi Booking</Link></li>
                                        <li><Link to="/food-delivery-app-development">Food Delivery</Link></li>
                                        <li><Link to="/social-media-app-development">Social Media</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-center text-lg-left order-1 order-lg-0">
                                <div className="foot-copy">
                                    <p>© 2021 Pride Limited. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 col-sm-12 col-12 text-center text-lg-right order-0 order-lg-1">
                                <ul className="foot-link">
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                </ul>
                                <div className="foot-vat-no">
                                    {/* <p>Registered in UK Company Number 11138771, VAT Number 317435803</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End Footer Bottom ======*/}
            </section>
        </main></div>
    )
}

export default Footer