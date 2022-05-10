import React from 'react'

const AboutWeb = () => {
  return (
    <div><section className="service-main-content padding-60 bg-white">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-12 col-sm-12 col-12 order-lg-1 mb-4 m-lg-0">
          <h2 className="h4 mb-3">Pride a Bespoke web development company</h2>
          <p>Speed, innovation and flawless performance. If these three things rank high on your priorities for web development projects, then Pride is a perfect fit. For close to a decade we have been mastering the art of creating cutting-edge web portals for a diverse range of industries.</p>
          <p>From the arithmetically growing eCommerce industry to individual portfolio websites that showcase talent to the world, we have worked on a broad range of web development projects.</p>
          <p>The web portals we create are enriched with functionalities like geo-location tracking, Cloud Computing, IoT, Augmented Reality, Virtual Reality among many others.</p>
          <p>We have also worked on countless Content Management Systems (CMS) that help businesses create, manage and optimize their content systems for business utilities. To ensure that your web portals deliver an engaging experience to mobile users, we also provide responsive designing as a part of our web development service.</p>
          <p>Rest assured, your website is accessible not just on a browser, but on all device screens with varying screen sizes.</p>
          <a href="/" className="btn btn-custome waves-effect waves-light">Talk to Our Expert Now</a>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-center">
          <img src="/assets/image/web_development/web-development-company.jpg" alt="Web Development" width={470} height={500} className="lazy rounded10 box-shadow" />
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default AboutWeb