import React from 'react'

const Banner = () => {
  return (
    <div><section className="banner innerbanner">         
    <div className="video">
      <img className="lazy" src="/assets/image/mobile_development/mobile_banner.jpg" alt="mobile app development" />
    </div>
    <div className="tenc-intro-main__wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h1>MOBILE APP DEVELOPMENT</h1>
            <p>Talking about developing a mobile application? Talk to us! A mobile app development company in the UK with a difference; we develop customer-centric apps with you at the heart of the process, to create an exceptional user experience. Our team of intuitive UI/UX designers and passionate mobile app developers scale up your ideas to create the highest quality app development service.</p>
            <ul className="banner-btn">
              <li className="mb-3 mr-3"><a href="/portfolio.php" className="btn waves-effect waves-light">View Our Work</a></li>
              <li className="mb-3"><a href="/app-development-cost-calculator.php" className="btn waves-effect waves-light">Calculate App Development Cost</a></li>
            </ul>
          </div>
        </div>               
      </div>
    </div>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/"> Home</a> </li>
      <li className="breadcrumb-item active">Mobile App Development</li>
    </ol>
  </section>
  </div>
  )
}

export default Banner