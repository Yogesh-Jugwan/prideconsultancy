import React, { useState } from "react";
import { BsPhone, BsLaptop } from "react-icons/bs";
import {
  AndroidSvg,
  FlutterSvg,
  CrossPlatformSvg,
  DigitalMarketingmSvg,
  SeoSvg,
  GoogleSvg,
  PhpSvg,
  WordPressSvg,
  ReactSvg,
  EcommSvg,
  HiringSvg,
  FacebookSvg,
  BusinessConsultancy,
  UiSvg,
} from "../svgIcons/svg";
import { Link } from "react-router-dom";

const OurOfferings = (props) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setTimeout(() => {
      setToggleState(index);
    }, 100);
  };
  return (
    <div>
      {/*======  Services ======*/}
      <section className="padding-60 bg-light">
        <div className="container">
          <div className="title">
            <span>Our Offerings</span>
            <h2>Do you want to grow your business?</h2>
            <p>
            Do you Need Mobile App Development, Website Development, Digital Marketing or a Graphic design Agency?
Are you searching for a Recruitment Agency or Business consultant to develop your business?
You are in the Right Place. Pride Consultancy Provides all of these services of the best quality with affordable prices from Industry professionals.

            </p>
          </div>
          <div className="services-tabs">
            <ul className="nav navbar-nav" id="servicesTab" role="tablist">
              <li>
                <Link
                  to=""
                  className={toggleState === 1 ? "active" : ""}
                  id="app-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="app"
                  aria-selected={toggleState === 1 ? "true" : "false"}
                  onClick={() => toggleTab(1)}
                >
                  <BsPhone size={50} />
                  <span className="w-100 w-100-hide">
                    Mobile App <span>Development</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className={toggleState === 2 ? "active" : ""}
                  id="app-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="app"
                  aria-selected={toggleState === 2 ? "true" : "false"}
                  onClick={() => toggleTab(2)}
                >
                  <BsLaptop size={50} />
                  <span className="w-100 w-100-hide">
                    Website <span>Development</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  id="web-tab"
                  className={toggleState === 3 ? "active" : ""}
                  data-toggle="tab"
                  role="tab"
                  aria-controls="web"
                  aria-selected={toggleState === 3 ? "true" : "false"}
                  onClick={() => toggleTab(3)}
                >
                  <DigitalMarketingmSvg size={50} />
                  <span className="w-100 w-100-hide">
                    Digital <span>Marketing</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  id="ar-vr-tab"
                  className={toggleState === 4 ? "active" : ""}
                  data-toggle="tab"
                  role="tab"
                  aria-controls="ar-vr"
                  aria-selected={toggleState === 4 ? "true" : "false"}
                  onClick={() => toggleTab(4)}
                >
                  <HiringSvg size={50} />
                  <span className="w-100 w-100-hide">
                    Hiring & <span>Recruitment</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  id="game-tab"
                  className={toggleState === 5 ? "active" : ""}
                  data-toggle="tab"
                  role="tab"
                  aria-controls="game"
                  aria-selected={toggleState === 5 ? "true" : "false"}
                  onClick={() => toggleTab(5)}
                >
                  <BusinessConsultancy />
                  <span className="w-100 w-100-hide">
                    Business <span>Consultancy</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  id="ui-ux-tab"
                  className={toggleState === 6 ? "active" : ""}
                  data-toggle="tab"
                  role="tab"
                  aria-controls="ui-ux"
                  aria-selected={toggleState === 6 ? "true" : "false"}
                  onClick={() => toggleTab(6)}
                >
                  <UiSvg />
                  <span className="w-100 w-100-hide">
                    UI/UX <span>Design</span>
                  </span>
                </Link>
              </li>
            </ul>
            <div className="tab-content" id="servicesTabContent">
              <div
                className={
                  toggleState === 1
                    ? "tab-pane fade show active"
                    : "tab-pane fade"
                }
                id="app"
                role="tabpanel"
                aria-labelledby="app-tab"
              >
                <div className="row align-items-center justify-content-center justify-content-lg-between">
                  <div className="col-12 col-lg-5 order-lg-1 text-center">
                    <img
                      className="lazy"
                      src="/assets/image/service/App Development.png"
                      alt="Mobile App Development"
                      width={458}
                      height={399}
                    />
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="servicesTabContent_text">
                      <h3>
                        <Link to="/mobile-application-development">
                          Mobile App Development
                        </Link>{" "}
                      </h3>
                      <span>
                        Why did you Choose Mobile App Development for Pride
                        Consultancy?
                      </span>
                      <p>
                        Why did you Choose Mobile App Development for Pride
                        Consultancy?
                      </p>
                      <p>
                        Mobile apps permit the users to have practical and
                        useful access to products, information, process, and
                        services that they would demand in real-time. In
                        addition, it enables the business to send notifications
                        about changes in products and services or something new.
                      </p>
                      <p>
                        Being a Mobile App Development Company in India, we
                        develop different types of apps catering to various
                        fields like Business, e-commerce, Art & Design, Tourism,
                        Sports, Health & Fitness etc. Our customers took their
                        ideas to a whole new level by customizing apps that
                        would serve a specific area. Our efficient team of app
                        developers will guide business houses in the right way,
                        to help them in gaining strong revenue.
                      </p>
                      <ul>
                        <li>
                          <Link
                            to="/android-application-development"
                            aria-label="Android App"
                            title="Android App"
                            className="waves-effect waves-light"
                          >
                            <AndroidSvg />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/android-application-development"
                            aria-label="Android App"
                            title="Android App"
                            className="waves-effect waves-light"
                          >
                            <FlutterSvg />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/android-application-development"
                            aria-label="Android App"
                            title="Android App"
                            className="waves-effect waves-light"
                          >
                            <CrossPlatformSvg />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/app-development-cost-calculator"
                            className="btn-custome btn waves-effect waves-light"
                            title
                          >
                            Calculate App Development Cost
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  toggleState === 2
                    ? "tab-pane fade show active"
                    : "tab-pane fade"
                }
                id="app"
                role="tabpanel"
                aria-labelledby="app-tab"
              >
                <div className="row align-items-center justify-content-center justify-content-lg-between">
                  <div className="col-12 col-lg-5 order-lg-1 text-center">
                    <img
                      className="lazy"
                      src="/assets/image/service/Web development.png"
                      alt="Mobile App Development"
                      width={458}
                      height={399}
                    />
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="servicesTabContent_text">
                      <h3>
                        <Link to="/mobile-application-development">
                          Website Development
                        </Link>{" "}
                      </h3>
                      <span>
                        Why did you select WEB Development Service for Pride
                        Consultancy?
                      </span>
                      <p>
                        Today, web development is one of the foremost profitable
                        and important exposures of a business. The Web
                        development company we operate in Haryana, India offers
                        Pre-Eminent web development services to small and
                        established businesses around the world.
                      </p>
                      <p>
                        supported by our comprehensive knowledge of web
                        development, we provide clients with custom designs and
                        development that are tailored to their needs. We believe
                        that elegance is extremely important when it involves
                        website development and that we pride ourselves on
                        getting that right!
                      </p>
                      <p>
                        We recognize our clients' needs. it's all about the
                        structure of the strategy. Proper planning with complete
                        documentation has helped us deliver superlative
                        performance. We are proficient in the development of
                        complex web application designs, dynamic websites, and
                        much more.
                      </p>
                      <p>
                        Our devoted programmers always ensure to deliver your
                        project on time, make certain that your websites are
                        bug-free, and you're stress-free. It will establish a
                        great relationship between our clients.
                      </p>
                      <ul>
                        <li>
                          <Link
                            to="/php-web-development"
                            className="waves-effect waves-light"
                            title
                          >
                            <PhpSvg />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/wordpress-development"
                            className="waves-effect waves-light"
                          >
                            <WordPressSvg />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/php-codeigniter-development"
                            className="waves-effect waves-light"
                          >
                            <ReactSvg />
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/ecommerce-web-development"
                            className="waves-effect waves-light"
                          >
                            <EcommSvg />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/app-development-cost-calculator"
                            className="btn-custome btn waves-effect waves-light"
                            title
                          >
                            Calculate Web App Development Cost
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  toggleState === 3
                    ? "tab-pane fade show active"
                    : "tab-pane fade"
                }
                id="web"
                role="tabpanel"
                aria-labelledby="web-tab"
              >
                <div className="row align-items-center justify-content-center justify-content-lg-between">
                  <div className="col-12 col-lg-5 order-lg-1 text-center">
                    <img
                      className="lazy"
                      src="/assets/image/service/Digital Marketing.png"
                      alt="Web Application Development"
                    />
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="servicesTabContent_text">
                      <h3>
                        <Link to="/web-development">Digital Marketing</Link>{" "}
                      </h3>
                      <span>Why Choose Us as Your Digital Marketer?</span>
                      <p>
                        Digital marketing is important because it connects a
                        business with its customers when they are online, and is
                        effective across all industries.
                      </p>
                      <p>
                        Better Online Presence. Better Branding. Better Profits.
                      </p>
                      <p>
                        If perfection is your key and excellence is your motto,
                        choose us as your digital marketer. Supporting multiple
                        technologies like HTML, WordPress, Python, React,
                        NextJS, NodeJS, etc.
                      </p>
                      <p>
                        our services are for everyone. There is something for
                        any business to benefit from with the services from our
                        web design company in India. Trust us to provide you
                        with content for any of your digital marketing needs
                        that will protect your pocket and increase your business
                        revenue.
                      </p>
                      <ul>
                        <li>
                          <Link
                            to="/php-web-development"
                            className="waves-effect waves-light"
                            title
                          >
                            <FacebookSvg />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/wordpress-development"
                            className="waves-effect waves-light"
                          >
                            <SeoSvg />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/php-codeigniter-development"
                            className="waves-effect waves-light"
                          >
                            <GoogleSvg />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/app-development-cost-calculator"
                            className="btn-custome btn waves-effect waves-light"
                            title
                          >
                            Calculate Web App Development Cost
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  toggleState === 4
                    ? "tab-pane fade show active"
                    : "tab-pane fade"
                }
                id="ar-vr"
                role="tabpanel"
                aria-labelledby="ar-vr-tab"
              >
                <div className="row align-items-center justify-content-center justify-content-lg-between">
                  <div className="col-12 col-lg-5 order-lg-1 text-center">
                    <img
                      className="lazy"
                      src="/assets/image/service/Job_s.png"
                      alt="Augmented Reality Mobile App Development"
                    />
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="servicesTabContent_text">
                      <h3>
                        <Link to="/augmented-reality-app-development">
                          Hiring & Recruitment
                        </Link>{" "}
                      </h3>
                      <span>
                        Why Choose Us as Your Hiring & Recruitment Partner?
                      </span>
                      <p>
                        To Saves your time, hassle and stress Recruiting staff
                        will be incredibly time-consuming and stressful: many
                        business owners spend up to 50 hours recruiting for one
                        role.
                      </p>
                      <p>
                        It works out much more cost-effective to urge us to
                        interview people or gather information for you – and
                        you’ll save yourself a load of stress too!
                      </p>
                      <p>
                        We have fully screened, trained and recruited candidates
                        so you'll be liberal to specialize in running your
                        business. Our Team is Responsive and quick to react to
                        your requests so you’re never left waiting.
                      </p>
                      <p>
                        We are giving Replacement Assurance While a rare
                        occurrence, Pride Consultancy takes this seriously. If
                        the candidates hired by us are deemed unsuitable within
                        a period of three months, we'll replace them at the
                        earliest.
                      </p>
                      <ul>
                        <li>
                          <Link
                            to="/contact"
                            className="btn-custome btn waves-effect waves-light"
                            title
                          >
                            Talk to Our Experts
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  toggleState === 5
                    ? "tab-pane fade show active"
                    : "tab-pane fade"
                }
                id="game"
                role="tabpanel"
                aria-labelledby="game-tab"
              >
                <div className="row align-items-center justify-content-center justify-content-lg-between">
                  <div className="col-12 col-lg-5 order-lg-1 text-center">
                    <img
                      className="lazy"
                      src="/assets/image/service/Business Consultant.png"
                      alt="Mobile Game Development"
                    />
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="servicesTabContent_text">
                      <h3>
                        <Link to="/game-development">Business Consultancy</Link>{" "}
                      </h3>
                      <span>Why Choose us for Business Consultancy? </span>
                      <p>
                        Pride Consultancy's Business Expert Consultants will
                        help your business grow its presence, reputation and
                        revenue through a comprehensive examination of your
                        directed markets, competitors with comparable business
                        models, and their marketing strategy, and provide a
                        concise report that reflects your E-commerce will prove
                        to be important for business.
                      </p>
                      <p>
                        We have Experts Consultants in Marketing, Finance, HR,
                        Strategy & Business Transformation that can help you to
                        for Better Online Presence, Better Branding & Better
                        Profits.
                      </p>
                      <ul>
                        <li>
                          <Link
                            to="/contact"
                            className="btn-custome btn waves-effect waves-light"
                            title
                          >
                            Talk to Our Experts
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  toggleState === 6
                    ? "tab-pane fade show active"
                    : "tab-pane fade"
                }
                id="ui-ux"
                role="tabpanel"
                aria-labelledby="ui-ux-tab"
              >
                <div className="row align-items-center justify-content-center justify-content-lg-between">
                  <div className="col-12 col-lg-5 order-lg-1 text-center">
                    <img
                      className="lazy"
                      src="/assets/image/service/UX And UI Designer.png"
                      alt=" offers mobile user interface design services in the UK and across the world"
                    />
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="servicesTabContent_text">
                      <h3>
                        <Link to="/ui-ux-design-development">
                          UX &amp; UI Design
                        </Link>{" "}
                      </h3>
                      <span>
                        Why Must You Choose UI/UX and Designing for us?
                      </span>
                      <p>
                        We incorporate the discovery procedure to know why and
                        how a particular app will be used according to users’
                        performance and their needs to integrate into our
                        development strategy. We are a well-deserved product
                        that develops, iterates, prototype, design and test
                        mobile apps to realize incredible user experiences.
                      </p>
                      <p>
                        We devote our time and enthusiasm to producing clean
                        code to meet the unique finish-product, and therefore
                        bring our application interface design to life.
                      </p>
                      <p>
                        Our expertise is also in graphic designing, brochure
                        design & Portfolio Designing. Switch to Pride
                        Consultancy’s UI and UX design services.
                      </p>
                      <p>
                        Our design team is a tiny design workroom inside a huge
                        software business that will help you develop an engaging
                        product efficiently and quickly.
                      </p>
                      <ul>
                        <li>
                          <Link
                            to="/contact"
                            className="btn-custome btn waves-effect waves-light"
                            title
                          >
                            Talk to Our UI/UX Experts
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End  Services ======*/}
    </div>
  );
};

export default OurOfferings;
