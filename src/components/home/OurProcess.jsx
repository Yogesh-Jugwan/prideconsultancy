import React from "react";
import process from './process.json'
const OurProcess = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  return (
    <div>
     <section className="padding-6030 bg-white o-hidden">
  <div className="container">
    <div className="title">
      <span>Our Process</span>
      <h2>From Sprint To Launch, Agility In Action</h2>
      <p>Intelivita follow the agile project management process to get things done faster and with maximum quality. We break down the entire mobile app development project into several phases, each phase dedicated to taking the project further
        to completion.</p>
    </div>
    <div className="row justify-content-center d-none d-lg-flex">
      <div className="col-lg-3 process-items wow fadeIn" data-wow-duration="0.2s" data-wow-delay={0}>
        <i className="fas fa-angle-right" />
        <div className="process-box">
          <div className="process-box-icon">
            <div dangerouslySetInnerHTML={createMarkup(process[0].svg)} />
          </div>
          <h4>01 Discover</h4>
          <ul>
            <li><i className="fas fa-chevron-right" />Requirement gathering</li>
            <li><i className="fas fa-chevron-right" />Timeline planning</li>
            <li><i className="fas fa-chevron-right" />Commercials</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 process-items wow fadeIn" data-wow-duration="0.2s" data-wow-delay="0.2s">
        <i className="fas fa-angle-right" />
        <div className="process-box">
          <div className="process-box-icon">
          <div dangerouslySetInnerHTML={createMarkup(process[0].svg1)} />
          </div>
          <h4>02 UI/UX Design</h4>
          <ul>
            <li><i className="fas fa-chevron-right" />Wireframe Designing</li>
            <li><i className="fas fa-chevron-right" />Prototyping</li>
            <li><i className="fas fa-chevron-right" />Brand styling &amp; preset creation</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 process-items wow fadeIn" data-wow-duration="0.2s" data-wow-delay="0.4s">
        <i className="fas fa-angle-right" />
        <div className="process-box">
          <div className="process-box-icon">
          <div dangerouslySetInnerHTML={createMarkup(process[0].svg2)} />
          </div>
          <h4>03 Prototypes</h4>
          <ul>
            <li><i className="fas fa-chevron-right" />Low-fidelity prototyping</li>
            <li><i className="fas fa-chevron-right" />High-Fidelity prototyping</li>
            <li><i className="fas fa-chevron-right" />Applying design thinking</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 process-items wow fadeIn" data-wow-duration="0.2s" data-wow-delay="0.6s">
        <i className="fas fa-angle-down" />
        <div className="process-box">
          <div className="process-box-icon">
          <div dangerouslySetInnerHTML={createMarkup(process[0].svg3)} />
          </div>
          <h4>04 Development</h4>
          <ul>
            <li><i className="fas fa-chevron-right" />Technology selection</li>
            <li><i className="fas fa-chevron-right" />API</li>
            <li><i className="fas fa-chevron-right" />Integrations agile development in action</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row justify-content-center flex-lg-row-reverse  d-none d-lg-flex">
      <div className="col-lg-3 pl-20 wow fadeIn" data-wow-duration="0.2s" data-wow-delay="0.8s">
        <div className="process-box">
          <div className="process-box-icon">
          <div dangerouslySetInnerHTML={createMarkup(process[0].svg4)} />
           
          </div>
          <h4>05 Quality Assurance</h4>
          <ul>
            <li><i className="fas fa-chevron-right" />User test creation</li>
            <li><i className="fas fa-chevron-right" />Manual testing</li>
            <li><i className="fas fa-chevron-right" />Automation testing</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 process-items wow fadeIn" data-wow-duration="0.2s" data-wow-delay="1s">
        <i className="fas fa-angle-left" />
        <div className="process-box">
          <div className="process-box-icon">
          <div dangerouslySetInnerHTML={createMarkup(process[0].svg5)} />
          </div>
          <h4>06 Deployment</h4>
          <ul>
            <li><i className="fas fa-chevron-right" />Application handover</li>
            <li><i className="fas fa-chevron-right" />Marketplace launches</li>
            <li><i className="fas fa-chevron-right" />App store submissions</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 process-items wow fadeIn" data-wow-duration="0.2s" data-wow-delay="1.2s">
        <i className="fas fa-angle-left" />
        <div className="process-box">
          <div className="process-box-icon">
          <div dangerouslySetInnerHTML={createMarkup(process[0].svg6)} />
          </div>
          <h4>07 Support &amp; Maintenance</h4>
          <ul>
            <li><i className="fas fa-chevron-right" />Troubleshooting</li>
            <li><i className="fas fa-chevron-right" />24/7 support</li>
            <li><i className="fas fa-chevron-right" />Managed services</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default OurProcess;
