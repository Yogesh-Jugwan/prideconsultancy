import React from 'react'

const Banner = () => {
  return (
    <div><section className="banner innerbanner">
    <div className="video">
    {/*  */}
      <img className="lazy" src="assets/image/web_development/web-app-development-banner.jpg" alt="Bespoke custom web development company in the UK, since inception, we are offering tailored web application development solutions for large business and startups." width={1920} height={800} />
    </div>
    <div className="tenc-intro-main__wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h1>FULL-CYCLE CUSTOM WEB DEVELOPMENT COMPANY</h1>
            <p>Pride is a full-cycle custom web development company. Wondering what that is? If you are nurturing a business idea that needs to harness the power of the web, Pride can make that happen. From prototyping an idea to launching the web portal with enterprise-grade features — we will take care of the entire nine yards of custom web development for your business.</p>
            <a href="" className="btn waves-effect waves-light btn-custome mb-3">View Our Work</a>
            <a href="" className="btn waves-effect waves-light btn-custome  mb-3">Calculate Your Web Development Cost</a>
          </div>
        </div>
      </div>
    </div>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/"> Home</a> </li>
      <li className="breadcrumb-item active">Web Development</li>
    </ol>
  </section>
  </div>
  )
}

export default Banner