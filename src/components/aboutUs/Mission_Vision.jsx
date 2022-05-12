import React from 'react'
import { MisionSvg, VisionSvg } from '../svgIcons/svg'

const Mission_Vision = () => {
  return (
    <div> 
      
      <section className="padding-6030 mission-n-vision-section bg-light">
    <div className="container">
      <div className="title">
        <span>Our Mission &amp; Vision</span>
        {/* <h2>Where we are now &amp; where we intend to go</h2> */}
        <p>
              Pride Consultancy is a professional website development and mobile
              application company delivering custom web development, mobile
              application, enterprise portals, e-commerce application, web
              design, HTML, android apps and Digital Marketing, PPC/SMO/SEO
              services to our India's and global clients.
            </p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-30">
          <div className="mission-n-vision-box rounded10">
            <div className="mission-n-vision-icon">
              <MisionSvg/>
            </div>
            <h3>Mission</h3>
            <p>
                    Our vision is to become the Largest global mobile and web
                    development company. Focused on continuous innovation as our
                    key to achieving the ultimate goal of success and emerging
                    as a globally recognized company by providing superior
                    quality services and solutions. We have fixed the following
                    principles in delivering our vision:
                  </p>
                  <ul>
                    <ol>
                      Pride Consultancy believes in exploring new opportunities
                      that maximize the business value, consistent growth and
                      sustainability using our core competencies.
                    </ol>
                    <ol>
                      Meeting the needs and beliefs of our customers, employees
                      and partners.
                    </ol>
                    <ol>
                      Work globally to improve the quality of your customers'
                      products and services and bring the benefits of IT.
                    </ol>
                    <ol>
                      Be a vibrant organization where openness, trust, teamwork,
                      simplicity and innovation are valued and cultivated.
                    </ol>
                    <ol>
                      Be an energetic organization where openness, trust,
                      teamwork, Competency, simplicity, and innovation are
                      valued and promoted.
                    </ol>
                    <ol>
                      We value Commitment, integrity, Competency, Innovations
                      and Change, Excellence, transparency and satisfaction for
                      our clients and ourselves.
                    </ol>
                    <ol>
                      We are globally recognized for providing quality services
                      to our clients across the globe while adhering to our core
                      values.
                    </ol>
                  </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-30">
          <div className="mission-n-vision-box rounded10">
            <div className="mission-n-vision-icon">
              <VisionSvg/>
            </div>
            <h3>Vision</h3>
            <p>
                    Being a professional web development, mobile application and
                    digital marketing company, our mission is to provide
                    customer-centric, result-oriented, cost-competitive,
                    innovative and functional IT solutions to our valued global
                    clients. We cohere to the following principles in carrying
                    out our mission:
                  </p>
                  <ul>
                    <ol>
                      We understand the needs and requirements of our customers
                      and create technology to solve the needs.
                    </ol>
                    <ol>
                      We believe in exploring new opportunities that maximize
                      business value, sustained growth and sustainability.
                    </ol>
                    <ol>
                      Empower our customers to respond faster and more
                      seamlessly to changing market dynamics.
                    </ol>
                    <ol>
                      We take advantage of new technologies to enable them to
                      become more agile and competitive.
                    </ol>
                    <ol>
                      Help our customers bring the best products to market in a
                      short time and at the lowest cost.
                    </ol>
                    <ol>
                      Cooperate with our customers for their continued success.
                    </ol>
                  </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Mission_Vision