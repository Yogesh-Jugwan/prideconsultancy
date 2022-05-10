import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SiFlutter, SiWordpress } from "react-icons/si";
import { FaPhp, FaReact } from "react-icons/fa";
import { AiOutlineAndroid, AiFillProfile } from "react-icons/ai";
import { BsFacebook, BsSearch, BsGoogle } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { IoLogoReddit } from "react-icons/io";
import { BiDevices } from "react-icons/bi";
import {
  UiSvg,
  MobileDevelopmentSvg,
  WebDevelopmentSvg,
  DigitalMarketingSvg,
  ApiSvg,
  EcommerceSvg,
  ShopifySvg,
  WebPortalSvg,
  AdsMarketing,
  EmailMarketing,
  SeoMarketing,
  InfluencersMarketingAvg,
  BrandGraphicSvg,
  VideoEditingSvg,
  PackagingDesignSvg,
  ProfileDesigningSvg
} from "../../components/svgIcons/svg";
import Mobile_Nav from "./Mobile_nav";
const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div>
      
      {/*====== Header ======*/}
      <header>
        <Link
          id="estimate-mobile-btn"
          className="estimate_btn"
          aria-label="Request a Call Back"
          to="/contect"
        >
          <i className="fas fa-phone-volume" /> <span>Request a Call Back</span>
        </Link>
        <div id="top" className="top-review-bar">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div className="top-left-part">
                <Link to="/client-review">
                  <img
                    src="/assets/image/logo/google_Logo.jpg"
                    alt="Pride is top rated mobile app agency UK, with offices in London and Leeds. Specialising in mobile app design and development for iOS and Android."
                    width={88}
                    height={25}
                  />
                  <div className="star">
                    <img
                      src="/assets/images/footer/footer-rating.png"
                      alt="Pride is top app making company in UK"
                      width={110}
                      height={19}
                    />
                  </div>
                  <strong>Excellent</strong>
                  <span> 4.8 out of 5</span>
                </Link>
              </div>
              <div className="top-right-part d-flex align-items-center justify-content-between">
                <span>
                  Email us on
                  <Link to="mailto:client@prideconsultancy.com">
                    <strong>client@prideconsultancy.com </strong>
                  </Link>
                  or Speak to our expert
                </span>
                <Link to="tel:+447368285632">
                  <strong>+91 8010074368</strong>
                </Link>
                <span className="or">or</span>
                <Link to="/contact" className="head-requet-btns">
                  <img
                    src="/assets/image/logo/callLogo.png"
                    width={30}
                    height={26}
                    alt="Oliver Baker is mobile app development consultant in the UK."
                  />
                  Request a Call Back
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navbar-wrap sticky">
          <div className="main-navbar">
            <nav className="navbar" id="navbar">
              <div className="navbar-header">
                <Link to="/">
                  <img
                    src="/assets/image/logo/Logo.png"
                    alt="Pride is top rated mobile app development agency UK, with offices in London and Leeds. Specialising in mobile app design and development for iOS and Android."
                    width={300}
                    height={94}
                  />
                </Link>
              </div>
              <div className="megamenu">
                <ul className="navbar-nav ml-auto" id="mainmenu">
                  <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to="/">Home</Link>
                  </li>

                  <li
                    className={
                      splitLocation[1] === "about_us"
                        ? "active"
                        : "accessible-megamenu accessible-megamenu-panel"
                    }
                  >
                    <Link to="/about_us">
                      About US <span className="" />
                    </Link>
                  </li>
                  <li className="megamenumain megamenuser">
                    <Link to={(e) => e.preventDefault()}>
                      Our Service <span className="fas fa-caret-down" />
                    </Link>
                    <div className="sub-menu-wrap y-submenu">
                      <ul className="sub-menu clearfix">
                        <li>
                          <Link to="/app_development">
                            <span className="mainmenuicon">
                              <MobileDevelopmentSvg />
                            </span>
                            Mobile App Development
                          </Link>
                          <ul className="sub-level2">
                            <li>
                              <Link to="/app_development">
                                <span className="submenuicon">
                                  <AiOutlineAndroid />
                                </span>
                                Android App Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/app_development">
                                <span className="submenuicon">
                                  <SiFlutter />
                                </span>
                                Flutter App Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/app_development">
                                <span className="submenuicon">
                                  <BiDevices />
                                </span>
                                Progressive Web App Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/app_development">
                                <span className="submenuicon">
                                <FaReact />
                                </span>
                                React Native App Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/app_development">
                                <span className="submenuicon">
                                  <BiDevices />
                                </span>
                                Hybrid App Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/app_development">
                                <span className="submenuicon">
                                  <ApiSvg />
                                </span>
                                API Development
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/web-development">
                            <span className="mainmenuicon">
                              <WebDevelopmentSvg />
                            </span>
                            Web Development
                          </Link>
                          <ul className="sub-level2">
                            <li>
                              <Link to="/web-development">
                                <span className="submenuicon">
                                  <FaPhp />
                                </span>
                                PHP Web Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/web-development">
                                <span className="submenuicon">
                                  <SiWordpress />
                                </span>
                                Wordpress Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/web-development">
                                <span className="submenuicon">
                                  <FaReact />
                                </span>
                                ReactJS Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/web-development">
                                <span className="submenuicon">
                                  <EcommerceSvg />
                                </span>
                                eCommerce Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/web-development">
                                <span className="submenuicon">
                                  <ShopifySvg />
                                </span>
                                Shopify Web Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/web-development">
                                <span className="submenuicon">
                                  <WebPortalSvg />
                                </span>
                                Web Portal Development
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/digital_marketing">
                            <span className="mainmenuicon">
                              <DigitalMarketingSvg />
                            </span>
                            Digital Marketing
                          </Link>
                          <ul className="sub-level2">
                            <li>
                              <Link to="/digital_marketing">
                                <span className="submenuicon">
                                  <BsFacebook />
                                </span>
                                Social Media Marketing
                              </Link>
                            </li>
                            <li>
                              <Link to="/digital_marketing">
                                <span className="submenuicon">
                                  <BsSearch />
                                </span>
                                Social Media Optimization
                              </Link>
                            </li>
                            <li>
                              <Link to="/digital_marketing">
                                <span className="submenuicon">
                                  <AdsMarketing />
                                </span>
                                Search Engine Optimization
                              </Link>
                            </li>
                            <li>
                              <Link to="/digital_marketing">
                                <span className="submenuicon">
                                  <EmailMarketing />
                                </span>
                                Ads Marketing / Pay Per Click (PPC)
                              </Link>
                            </li>
                            <li>
                              <Link to="/digital_marketing">
                                <span className="submenuicon">
                                  <SeoMarketing />
                                </span>
                                Content Marketing
                              </Link>
                            </li>
                            <li>
                              <Link to="/digital_marketing">
                                <span className="submenuicon">
                                  <InfluencersMarketingAvg />
                                </span>
                                SMS / Email / Whatsapp Marketing
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/ui/ux_esigning">
                            <span className="mainmenuicon">
                              <UiSvg />
                            </span>
                            UI/UX & Designing
                          </Link>
                          <ul className="sub-level2">
                            <li>
                              <Link to="/ui-ux_designing">
                                <span className="submenuicon">
                                  <CgWebsite />
                                </span>
                                Web & Mobile App UI/UX Designing
                              </Link>
                            </li>
                            <li>
                              <Link to="/ui-ux_designing">
                                <span className="submenuicon">
                                  <IoLogoReddit />
                                </span>
                                Logo Designing
                              </Link>
                            </li>
                            <li>
                              <Link to="/ui-ux_designing">
                                <span className="submenuicon">
                                  <BrandGraphicSvg />
                                </span>
                                Banner & Brochures Designing
                              </Link>
                            </li>
                            <li>
                              <Link to="/ui-ux_designing">
                                <span className="submenuicon">
                                  <VideoEditingSvg />
                                </span>
                                Brand Graphic Designing
                              </Link>
                            </li>
                            <li>
                              <Link to="/ui-ux_designing">
                                <span className="submenuicon">
                                  <PackagingDesignSvg />
                                </span>
                                Illustration & Video Editing
                              </Link>
                            </li>
                            <li>
                              <Link to="/ui-ux_designing">
                                <span className="submenuicon">
                                  <ProfileDesigningSvg />
                                </span>
                                Product & Packaging Designing
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="megactasection w-100"></div>
                    </div>
                  </li>
                  <li className="accessible-megamenu accessible-megamenu-panel">
                    <Link to={(e) => e.preventDefault()}>
                      Pride Jobs <span className="fas fa-caret-down" />
                    </Link>
                    <ul className="sub-menu-normal y-submenu">
                      <li>
                        <Link to="/">Job Seekers</Link>
                      </li>
                      <li>
                        <Link to="/">Employers</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      splitLocation[1] === "blogs"
                        ? "active"
                        : "accessible-megamenu accessible-megamenu-panel"
                    }
                  >
                    <Link to="/blogs">Blog</Link>
                  </li>
                  <li
                    className={
                      splitLocation[1] === "contact"
                        ? "active"
                        : "accessible-megamenu accessible-megamenu-panel"
                    }
                  >
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link
                      className="estimate_btn btn waves-effect waves-light"
                      to="/app-development-cost-calculator"
                    >
                      Estimate Your Project
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <Mobile_Nav />
      {/*===== End Header =====*/}
    </div>
  );
};

export default Navbar;
