import React from 'react'
const AboutApp = () => {
    
  return (
    <div><section className="about service-main-content">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5 col-sm-12 mb-4 mb-lg-0">
          <div className="about-slider">
            <div className="about-img-slider" style={{height:'32rem'}}>
            {/* /assets/image/app_development/about_app.jpg */}
              <div><img className="lazy" src="/assets/image/app_development/about_app.jpg" alt=""
              /></div>
            
            </div>
                  
          </div>
        </div>   
        <div className="col-12 col-lg-7 col-sm-12">
          <h2 className="mb-3">Mobile Application Solutions</h2>
          <p>A perfect blend of innovation and business solutions offered in a mobile application. Drive and deliver successful business and scale it to new heights with our mobile app development services offering the best mobile app solutions. The best mobile applications can be defined by the style it holds in the User Interface (UI) and the way it provides the User Experience (UX). We blend the best of both to offer top mobile application solutions that caters to your business requirements.</p>
          <p>Turn your thoughts to reality with our top-notch mobile application services for IPhone, IPad and Android. Our team of mobile app developers work on refining your ideas with a tailored solution that fits around your schedule. We strive to create highly customized mobile applications to meet customer and enterprise needs.</p>
          <p>We are experts in developing outstanding mobile app solutions for our dynamic client base by delivering the most efficient end product. Our commitment to stringent timelines for delivery and cost effective services will work wonders for your businesses.</p>
          <a className="btn-custome btn waves-effect waves-light" href="/contact">Talk to Our Expert Now</a>
        </div>   
      </div>      
    </div>
  </section>
  </div>
  )
}

export default AboutApp