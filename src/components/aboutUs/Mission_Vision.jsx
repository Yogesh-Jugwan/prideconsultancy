import React from 'react'
import { MisionSvg, VisionSvg } from '../svgIcons/svg'

const Mission_Vision = () => {
  return (
    <div> <section className="padding-6030 mission-n-vision-section bg-light">
    <div className="container">
      <div className="title">
        <span>Mission &amp; Vision</span>
        <h2>Where we are now &amp; where we intend to go</h2>
        <p>We have come a long way helping startups and enterprises with digital transformation. Our journey is not yet over though, and continued growth will be centered on innovative digital solutions.</p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-30">
          <div className="mission-n-vision-box rounded10">
            <div className="mission-n-vision-icon">
              <MisionSvg/>
            </div>
            <h3>Mission</h3>
            <p>Digital Innovation for our Client’s to achieve their goals and aspirations for their projects. We have delivered for all types of Client’s, from Jack Parkin and his Social Media Startup Chatagram, to the global tech powerhouse Microsoft and their Virtual Reality disrupter Art of Works, and we will continue to help all our partners with the same passion and creativity, no matter their situation.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-30">
          <div className="mission-n-vision-box rounded10">
            <div className="mission-n-vision-icon">
              <VisionSvg/>
            </div>
            <h3>Vision</h3>
            <p>To be the first choice for clients who want affordable, state-of-the-art technology solutions for multi-faceted business requirements.</p>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Mission_Vision