import React from "react";
import ContactUs from "../../common/contact/ContactUs";
import How_Work from "./How_Work";
import Leadership from "./Leadership";
import MeetTeam from "./MeetTeam";
import Mission_Vision from "./Mission_Vision";
import OurHistory from "./OurHistory";
const AboutUs = () => {
  return (
    <div>
      {" "}
      <section className="banner innerbanner aboutusbanner">
        <div className="video">
          <img
            className="lazy"
            src="assets/image/about/about_Us.jpg"
            alt="Pride careers"
            width={1920}
            height={800}
          />
        </div>
        <div className="tenc-intro-main__wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h1>
                  <span>We are Pride</span> Welcome to PRIDE CONSULTANCY
                </h1>
                <p style={{ margin: "0 0 10px" }}>
                  We are a good squad of nerd minds, think-tankers, pro coders,
                  business geeks and awesomely creative beings.
                </p>
                <p style={{ margin: 0 }}>
                  PRIDE CONSULTANCY is the IT Consulting Software Development,
                  Recruitment & Business Consultancy Company that delivers
                  personalized solutions to your technical aspirations &
                  business challenges. We hold a large group of specializations.
                  We provide adaptive and quantitative services specializing in
                  advanced web and mobile solutions, enterprise apps and
                  portals. We develop competitive solutions in the areas of
                  Business Development, App Production & Implementation, Web
                  Design & Development, Mobile Application Development, Digital
                  Marketing, Recruitment & Recruitment and Business Consulting.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/"> Home</a>{" "}
          </li>
          <li className="breadcrumb-item active">About Us</li>
        </ol>
      </section>
      <MeetTeam />
      <Leadership />
      <Mission_Vision/>
      <OurHistory/>
      <How_Work/>
      <ContactUs />
    </div>
  );
};

export default AboutUs;
