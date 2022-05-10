import React from "react";
import ContactUs from "../../common/contact/ContactUs";
import Banner from "./Banner";
import Industries from "./Industries";
import OurOfferings from "./OurOfferings";
import OurProcess from "./OurProcess";
import OurValue from "./OurValue";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Home = () => {
  const aboutData = [
    {
      img: "/assets/images/home/success-project.svg",
      number: "15",
      discription: "Successfully",
      discription_line_2: "Developed Projects",
    },
    {
      img: "/assets/images/home/unique-idea.svg",
      number: "15",
      discription: "Unique",
      discription_line_2: "Ideas Submitted",
    },
    {
      img: "/assets/images/home/verify-review.svg",
      number: "9",
      discription: "Verified",
      discription_line_2: "5 Star Client Reviews",
    },
    {
      img: "/assets/images/home/our-team.svg",
      number: "4",
      discription: "Professionals",
      discription_line_2: "in Our Team",
    },
  ];

  return (
    <main>
      <div>
        <Banner />
        <section className="about">
          <div className="about-bg-section">
            <img
              className="lazy"
              src="/assets/image/home_about/about-us-bg.jpg"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 col-sm-12 mb-4 mb-lg-0">
                <div className="video-area-wrapper">
                  <img
                    className="lazy"
                    src="/assets/image/home_about/about.jpg"
                    alt="Pride is one of the prominent mobile application development companies in the UK, offering iPhone (iOS) & Android app development services."
                    width={600}
                    height={550}
                  />
                  <div className="hover">
                    {/* <a href="assets/images/video/mobile-app-development.mp4" class="video-play-btn mfp-iframe"><i class="fas fa-play"></i></a> */}
                    {/* <a href="https://player.vimeo.com/video/282873577?title=0&portrait=0&byline=0&autoplay=1" class="video-play-btn mfp-iframe"><i class="fas fa-play"></i></a> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-sm-12">
                <div className="title text-left">
                  <span>Who We Are</span>
                  <h2>About Pride</h2>
                </div>
                <h3 className="mb-3">
                Pride Consultancy in Delhi-NCR is India’s most affordable, Expertise, Resources, Management and Technology company with the highest quality. 

                </h3>
                <p>
                We understand clients' requirements. We offer Web Development, Mobile App Development, digital marketing and website designing at the best possible price in the best quality. Pride Consultancy is the best web design and development company in Delhi-NCR with highly skilled UX/UI website designers in India.
                </p>
                <p>
                Our services include web design, website development, digital marketing, SEO, Recruitment and Business Consultancy Agency in Haryana, India. We experts give services that make it easy for our customers to show online presence. We are giving solutions that make it easy for our customers to look online to the world. We strive to provide our clients with a complete understanding of the current market, designing and implementing strategies that will help them be successful in their endeavors.
                </p>
                <p>
                In the small business and enterprise sectors, Pride Consultancy has provided web services for over 3 years. Thanks to our expert creative website designers and developers, we help our customers reach the next level of their online presence, such as mobile applications and digital marketing, to reach their branding, tariff, and lead generation goals.
                </p>
              </div>
            </div>

            <ul className="counter-section">
              {aboutData.map((index, i) => {
                return (
                  <li key={i}>
                    <img
                      className="lazy"
                      src={index.img}
                      alt="The mobile app development services UK of Pride has been successful and helped businesses achieve their transformation goals"
                      width={50}
                      height={50}
                    />
                    <div className="counter_text">
                      <div className="counter" data-count={150}>
                        <CountUp end={index.number} redraw={false} duration={1} >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                        <CountUp />
                      </div>
                      <i className="fas fa-plus" />
                      <p>
                        {index.discription}
                        <br /> {index.discription_line_2}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <OurOfferings />
        <Industries />
        <OurValue />
        <OurProcess />
        <ContactUs />
      </div>
    </main>
  );
};

export default Home;
