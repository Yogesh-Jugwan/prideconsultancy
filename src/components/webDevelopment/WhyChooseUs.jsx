import React from 'react'
import { AffordableSolutionSvg, PerfectDesignSvg, ProblemSolversSvg, QualifiedTeamSvg } from '../svgIcons/svg'

const WhyChooseUs = () => {
  return (
    <div><section className="padding-60 bg-light web-why-choose-us-main">
    <div className="container">
      <div className="title">
        <span>What Makes us the Best</span>
        <h2>Why Choose our Web Development Services</h2>
        <p>The years of experience in web application development makes our team of dreamers and doers more proficient and effective in delivering cutting edge solutions.</p>
      </div>
      <div className="m-height-170">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="web-why-choose-us-inner-box mhbox">
              <div className="web-why-choose-inner-icon">
               <ProblemSolversSvg/>
              </div>
              <h5>Prompt Customization</h5>
              <p>Our experienced web developers provide customization web solutions on the go. We save time and deliver a quality product everytime.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="web-why-choose-us-inner-box mhbox">
              <div className="web-why-choose-inner-icon">
               <QualifiedTeamSvg/>
              </div>
              <h5>Qualified Team</h5>
              <p>Our team is highly experienced and well updated on latest trends in web development services. We achieve client satisfaction by assisting them to achieve business goals.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="web-why-choose-us-inner-box mhbox">
              <div className="web-why-choose-inner-icon">
               <AffordableSolutionSvg/>
              </div>
              <h5>Affordable Solution</h5>
              <p>Web application may look hefty, but Pride provides cost-effective website development solutions which enhance the ROI of the business in a true sense.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="web-why-choose-us-inner-box mhbox">
              <div className="web-why-choose-inner-icon">
                <PerfectDesignSvg/>
              </div>
              <h5>Perfect Design</h5>
              <p>Our creative UI UX designer team craft the web application that flaunts online. We develop smooth, stunning and feature rich user friendly solutions that increase user experience on the website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default WhyChooseUs