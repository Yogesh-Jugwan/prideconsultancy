import React from 'react'

const Contact = () => {
  return (
    <main>

<div>
        {/*====== Banner ======*/}
        <section className="banner innerbanner">
          <div className="video">
            <img className="lazy" src="/assets/image/contact/contact-banner.jpg" alt="Pride-contact" width={1920} height={800} />
          </div>
          <div className="tenc-intro-main__wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                  <h1 className="mb-2 font-semibold">Take The First Step Forward</h1>
                  <h2>Talk To Our Experts</h2>
                  <p>Give us a call. Drop us an email. Connect socially</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Banner ======*/}
        {/*====== Contact Form section ======*/}
        <section className="contact-form-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7 col-sm-12 col-12">
                <div className="contact-form-box bg-white rounded10 box-shadow">
                  <form id="contact_form" method="post" encType="multipart/form-data">
                    <div className="row">
                      <div className="form-group col-md-6 col-12">
                        <input type="text" name="name" className="form-control" placeholder="Name" required  />
                      </div>
                      <div className="form-group col-md-6 col-12">
                        <input type="email" name="email" className="form-control" placeholder="Email" required />
                      </div>
                      <div className="form-group col-md-6 col-12">
                        <div className="phone-field">
                          <div className="con-num">
                            <input type="text" name="phone" className="form-control contact-phone" placeholder="Contact No" required minLength={10} maxLength={11}  />
                          </div>
                        </div>
                      </div>
                      <div className="form-group col-md-6 col-12">
                        <input type="text" name="company_name" className="form-control" placeholder="Company Name"  />
                      </div>
                      <div className="form-group col-md-6 col-12">
                        <select className="form-control" name="budget">
                          <option value>Your Budget</option>
                          <option value="£0 - £1000">£0 - £1000</option>
                          <option value="£1000 - £5000">£1000 - £5000</option>
                          <option value="£5000 - £10000">£5000 - £10000</option>
                          <option value="£10000 - £20000">£10000 - £20000</option>
                          <option value="£20000+">£20000 +</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6 col-12">
                        <select className="form-control" name="region" required>
                          <option value>Your Region</option>
                          <option value="Europe">Europe</option>
                          <option value="North America">North America</option>
                          <option value="South America">South America</option>
                          <option value="Asia">Asia</option>
                          <option value="Africa">Africa</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>
                      <div className="form-group col-12">
                        <select className="form-control" name="service" required>
                          <option value>Select the Service</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="AR Development">AR Development</option>
                          <option value="VR Development">VR Development</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Game Development">Game Development</option>
                          <option value="Enterprise Solutions">Enterprise Solutions</option>
                          <option value="Startup MVP">Startup MVP</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6 col-12">
                        <select className="form-control" name="reference">
                          <option value>Where Did You Hear About Us?</option>
                          <option value="Google">Google</option>
                          <option value="Clutch">Clutch</option>
                          <option value="People Per Hour">People Per Hour</option>
                          <option value="GoodFirms">GoodFirms</option>
                          <option value="Personal Reference">Personal Reference</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Other">Other</option>
                        </select>                              
                      </div>
                      <div className="form-group col-md-6 col-12">
                      </div>
                      <div className="form-group col-12">
                        <textarea name="message" className="form-control" placeholder="Message" rows={10} defaultValue={""} />
                      </div>
                      <div className="form-group col-md-6 text-center text-md-left">
                        <div id="intelGrecaptchaContact" />
                        <input type="hidden" className="form-control" name="gRecaptchaContact" id="gRecaptchaContact" />
                      </div>
                      <div className="form-group col-md-6 text-center text-md-right">
                        <button type="submit" className="btn-custome btn waves-effect waves-light contact-custome-btn"><i className="fa fa-spinner fa-spin start-loader" />Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                <div className="schedule-meeting-main">
                  <div className="schedule-meeting-box rounded10">
                    <div className="schedule-meeting-img">
                      <img className="lazy" src="/assets/image/contact/meeting.svg" alt="Oliver Baker- Author" />
                    </div>
                    <div className="schedule-meeting-content text-center">
                      <div className="schedule-meeting-content-description">
                        <h3>So you've Heard our Story,</h3>
                        <h4>Tell us Yours!</h4>
                        <p>We've several ways for you to contact us, so drop us a message or give us a call.</p>
                        <p>If you have a question, an idea, are a problem to solve, we can help, so get in touch!</p>
                      </div>
                      <a href="/contact" className="btn-custome btn waves-effect waves-light head-requet-btn">Schedule a Meeting</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Contact Form section ======*/}
        {/*====== Contact Form section ======*/}
        <section className="padding-60 contact-info-main bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12 mb-30">
                <div className="contact-info-box text-center rounded10 box-shadow">
                  <div className="contact-info-icon box-shadow">
                    <svg x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                        .st0{fill:#FFFFFF;}\n                     " }} />
                      <path d="M494.7,287.7c1.5-11.6,2.2-23.5,2-35.6C494.4,122.9,389.5,18,260.4,15.6c-12.1-0.2-23.9,0.5-35.5,2
                     c-8.1,1-16.3-0.3-23.6-3.8C182.7,4.9,161.9-0.1,139.9,0C63.2,0.3,0.4,63,0,139.7c-0.1,22.1,4.8,43,13.8,61.6
                     c3.5,7.2,4.6,15.2,3.6,23.1c-1.4,10.4-2.1,21.1-2.1,31.9c0,133,107.8,240.7,240.7,240.7c10.9,0,21.7-0.7,32.2-2.1
                     c7.8-1.1,15.9,0.1,23,3.5c18.6,8.9,39.5,13.8,61.5,13.6c76.4-0.6,138.8-63.1,139.3-139.5c0.1-21.9-4.7-42.6-13.5-61.1
                     C495,304,493.7,295.7,494.7,287.7z" />
                      <path className="st0" d="M275.4,418.3c-69.8,3.6-102.6-11.9-132.5-39.9c-33.5-31.4-20-67.2,7.3-69.1c27.2-1.8,43.5,31,58.2,40
                     c14.5,9.1,69.7,29.7,98.9-3.7c31.7-36.4-21.2-55.1-59.9-60.8c-55.4-8.2-125.4-38.1-119.8-97.1c5.4-59.1,50-89.3,97-93.5
                     c59.9-5.4,98.9,9.1,129.7,35.3c35.6,30.5,16.4,64.4-6.3,67.2c-22.6,2.8-48.1-50-98-50.9c-51.4-0.7-86.2,53.6-22.6,69
                     c63.6,15.5,131.5,21.9,156.1,79.9C408,353,345.4,414.7,275.4,418.3L275.4,418.3z" />
                    </svg>
                  </div>
                  <div className="tool">Talk to us on Skype</div>
                  <div className="name"><a href="">Pride Support</a></div>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-30">
                <div className="contact-info-box text-center rounded10 box-shadow">
                  <div className="contact-info-icon box-shadow">
                    <svg x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                      <g>
                        <path d="M381.6,237.4h-30.5c0-42.2-34.3-76.6-76.6-76.6v-30.5C333.6,130.4,381.6,178.4,381.6,237.4z" />
                        <path d="M443.3,232.3h-30.5c0-73.4-59.7-133.1-133.1-133.1V68.7C369.9,68.7,443.3,142.1,443.3,232.3z" />
                        <path d="M504.4,227.2h-30.5C473.9,123,389,38.1,284.8,38.1V7.6c58.7,0,113.8,22.8,155.3,64.3C481.5,113.4,504.4,168.6,504.4,227.2z
                        " />
                      </g>
                      <path d="M496.3,428l-28.9,28.9c-20.1,20.1-44.2,33.8-69.7,41.2c-54.8,15.7-116.3,2-159.4-41.2L55.1,273.7
                     c-63.3-63.3-63.3-165.9,0-229.1L84,15.7c10.8-10.8,28.3-10.8,39.1,0l75.4,75.4c10.8,10.8,10.8,28.3,0,39.1l-28.9,28.9l-8.7,8.7
                     c-19.5,19.5-19.5,51,0,70.5l112.8,112.8c19.5,19.5,51,19.5,70.5,0l8.7-8.7l28.9-28.9c10.8-10.8,28.3-10.8,39.1,0l75.4,75.4
                     C507.1,399.7,507.1,417.2,496.3,428z" />
                    </svg>
                  </div>
                  <div className="tool">Our Contact</div>
                  <div className="name"><a href="tel:+91 8010074368
">+91 8010074368
</a></div>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-30">
                <div className="contact-info-box text-center rounded10 box-shadow">
                  <div className="contact-info-icon box-shadow">
                    <svg x="0px" y="0px" viewBox="0 0 452.8 452.8" style={{enableBackground: 'new 0 0 452.8 452.8'}} xmlSpace="preserve">
                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                        .st0{fill:#FFFFFF;}\n                     " }} />
                      <g>
                        <path d="M452.8,196.6v232.3c0,4.1-3.4,7.5-7.5,7.5H7.5c-4.1,0-7.5-3.4-7.5-7.5V196.6c0-2.6,1.3-4.9,3.4-6.3l57.8-38.3V23.9
                        c0-4.1,3.4-7.5,7.5-7.5h315.5c4.1,0,7.5,3.4,7.5,7.5v128.1l57.8,38.3C451.5,191.7,452.8,194,452.8,196.6z M437.8,414.9V209.1
                        l-172.5,91.5L437.8,414.9z M391.7,189.1h28.8l-28.8-19.1V189.1z M391.7,216.6l23.5-12.5h-23.5V216.6z M15,414.9l172.5-114.3
                        L15,209.1V414.9z M61.2,216.6v-12.5H37.6L61.2,216.6z M61.2,189.1v-19.1l-28.8,19.1H61.2z" />
                        <polygon className="st0" points="420.5,189.1 391.7,189.1 391.7,170.1  " />
                        <polygon className="st0" points="420.5,421.4 32.4,421.4 226.4,292.8   " />
                        <polygon className="st0" points="415.2,204.1 391.7,216.6 391.7,204.1  " />
                        <path className="st0" d="M293.7,144.2v5.5c0,14.5-11.8,26.3-26.3,26.3c-9.4,0-17.7-5-22.4-12.5c-5.7,5-13.2,8.1-21.3,8.1
                        c-17.9,0-32.4-14.5-32.4-32.4c0-17.9,14.5-32.4,32.4-32.4c17.9,0,32.4,14.5,32.4,32.4v10.5c0,6.2,5.1,11.3,11.3,11.3
                        c6.2,0,11.3-5.1,11.3-11.3v-5.5c0-28.8-23.4-52.3-52.3-52.3c-28.8,0-52.3,23.4-52.3,52.3v2.2c0,28.8,23.4,52.3,52.3,52.3h59.8
                        c4.1,0,7.5,3.4,7.5,7.5s-3.4,7.5-7.5,7.5h-59.8c-37.1,0-67.3-30.2-67.3-67.3v-2.2c0-37.1,30.2-67.3,67.3-67.3
                        C263.5,76.9,293.7,107.1,293.7,144.2z M241,139.2c0-9.6-7.8-17.4-17.4-17.4c-9.6,0-17.4,7.8-17.4,17.4c0,9.6,7.8,17.4,17.4,17.4
                        C233.2,156.6,241,148.8,241,139.2z" />
                        <polygon className="st0" points="61.2,204.1 61.2,216.6 37.6,204.1  " />
                        <polygon className="st0" points="61.2,170.1 61.2,189.1 32.4,189.1  " />
                      </g>
                    </svg>
                  </div>
                  <div className="tool">If not Forms</div>
                  <div className="name"><a href="mailto:client@prideconsultancy.com">client@prideconsultancy.com</a></div>
                </div>
              </div>
            </div>
            <div className="contact-follow-us-section text-center">
              <h2>Follow us on</h2>
              <ul className="header_social box-shadow rounded10 bg-white">
                {/* <li><a href=https://plus.google.com/u/0/106928501521005803998 target="_blank" class="fab fa-google-plus-g"><span>Google+</span></a></li> */}
                <li><a href="" target="_blank" className="fab fa-twitter"><span>Twitter</span></a></li>
                <li><a href="" target="_blank" className="fab fa-facebook-f"><span>Facebook</span></a></li>
                <li><a href="" target="_blank" className="fab fa-linkedin-in"><span>Linkedin</span></a></li>
                <li><a href="" target="_blank" className="fab fa-instagram"><span>Instagram</span></a></li>
                {/* <li><a href="" target="_blank" className="fab fa-behance"><span>Behance</span></a></li> */}
              </ul>
            </div>
          </div>
        </section>
       
      </div>
    </main>
  )
}

export default Contact