import React from 'react'
import { AgileDevelopmentSvg, BugFreeSvg, CostEfficientSvg, ExpertDevelopersSvg, InspirationalSvg, NonDisclosureAgreementSvg, OnTimeDeliverySvg, TransparentCompetitiveSvg } from '../svgIcons/svg'

const WhyChooseUs = () => {
  return (
    <div><section className="padding-60 bg-light p-relative">
    <div className="container mt-5">
      <div className="title">
        <span>What Makes Us Best</span>
        <h2>Why Choose Pride as Your Mobile App Development Partner</h2>
        <p>Customer-centric mobile app development needs a tech-minded partner, not just a vendor. As a leading mobile app development agency, Pride understands the deliverables expected timely delivery with great user experience.</p>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="app-why-box">
            <div className="app-why-box-icon">
              <AgileDevelopmentSvg/>
            </div>
            <h4>Agile Development Methodology</h4>
            <p className="mb-0">We follow the Agile development methodology to facilitate rapid product releases with stability and high-quality code.</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="app-why-box">
            <div className="app-why-box-icon">
              <BugFreeSvg/>
            </div>
            <h4>Bug-Free Deployment</h4>
            <p className="mb-0">Our QA professionals use a combination of manual and automation testing to ensure that the app is released bug-free.</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="app-why-box">
            <div className="app-why-box-icon">
             <CostEfficientSvg/>
            </div>
            <h4>Cost Efficient</h4>
            <p className="mb-0">High-quality services and affordability may not be offered together elsewhere. But, for Pride it is one of the key USPs.</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="app-why-box">
            <div className="app-why-box-icon">
              <ExpertDevelopersSvg/>
            </div>
            <h4>Expert Native Developers</h4>
            <p className="mb-0">Your apps will be built by qualified, experienced and passionate iPhone app developers who see their work as pieces of art.</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="app-why-box">
            <div className="app-why-box-icon">
              <InspirationalSvg/>
            </div>
            <h4>Inspirational UI/UX</h4>
            <p className="mb-0">Our UI/UX designs are inspired by the habits and actions that users have become accustomed to.</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="app-why-box">
            <div className="app-why-box-icon">
              <NonDisclosureAgreementSvg/>
            </div>
            <h4>Non-disclosure Agreement</h4>
            <p className="mb-0">Every project would be accompanied with an NDA where we agree not to share your project details to any outsider.</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="app-why-box">
            <div className="app-why-box-icon">
              <TransparentCompetitiveSvg/>
            </div>
            <h4>Transparent &amp; Competitive</h4>
            <p className="mb-0">Our devs, tech leads and rest of the team take pride in delivering what is promised to the client.</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="app-why-box">
            <div className="app-why-box-icon">
              <OnTimeDeliverySvg/>
            </div>
            <h4>On-Time Delivery</h4>
            <p className="mb-0">We know how it feels when someone fails to meet their deadlines. So we take acute measures to ensure that the project is delivered on time, if not earlier.</p>
          </div>
        </div>               
      </div>
    </div>
  </section>
  </div>
  )
}

export default WhyChooseUs