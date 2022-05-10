import React from 'react'
import MeetingSchedule from './MeetingSchedule'

const ContactUs = () => {
  return (
    <div>
        <MeetingSchedule/>
    <section className="padding-60 bg-white">
 <div className="container">
   <div className="title">
     <span>Connect with us to Discuss More </span>
     <h2>Schedule a Call Now</h2>
   </div>
   <div className="row align-items-center">
     <div className="col-12 col-sm-12 col-lg-5">
       <div className="row">
         {/* <div className="col-12 col-sm-6 col-lg-6">
           <div className="contact_top_rating">
             <a href="https://clutch.co/profile/" rel="noopener" target="_blank">
               <img className="lazy" src="" alt="Clutch top rated mobile app development company in UK" width={172} height={68} />
               <span className="orange-text">Reviewed On</span>
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <strong>4.8</strong>
               <span className="text-dark">27 Reviews </span>
             </a>
           </div>
         </div> */}
         {/* <div className="col-12 col-sm-6 col-lg-6">
           <div className="contact_top_rating">
             <a href="https://www.goodfirms.co/" rel="noopener" target="_blank">
               <img className="lazy" src="" alt="Top Mobile App Developers on GoodFirms" width={172} height={68} />
               <span className="orange-text">Reviewed On</span>
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <strong>5.0</strong>
               <span className="text-dark">2 Reviews </span>
             </a>
           </div>
         </div> */}
       </div>
       <ul className="contact_rating">
         <li>
           <a href="https://www.upwork.com/" rel="noopener" target="_blank">
             <div className="work_logo">
               <img className="lazy" src="/assets/image/contact/upwork.png" alt="Top Rated Freelance App developer on Upwork" width={200} height={75} />
               <img className="top_rating_img lazy" src="/assets/image/contact/upwork-rating.png" alt="Intelivita UpWork Rating" width={35} />
             </div>
             <div className="work_rating">
               <img className="lazy" src="/assets/image/contact/rating-img.svg" alt="Mobile App Developers London" width={50} height={50} />
               <div className="rating_text">
                 <p>Rating <strong>2.7</strong> </p>
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
               </div>
             </div>
           </a>
         </li>
         <li>
           <a href="https://www.peopleperhour.com" rel="noopener" target="_blank">
             <div className="work_logo">
               <img className="lazy" src="/assets/image/contact/peoplehour.png" alt="Top UK Mobile App Development Companies" width={200} height={75} />
               <img className="top_rating_img lazy" src="/assets/image/contact/pph.jpg" alt="Top Developers" width={40} />
             </div>
             <div className="work_rating">
               <img className="lazy" src="/assets/image/contact/rating-img.svg" alt="Top Rating Developers" width={50} height={50} />
               <div className="rating_text">
                 <p>Rating<strong>9/10</strong></p>
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
               </div>
             </div>
           </a>
         </li>
         <li>
           <a href="https://www.freelancer.com" rel="noopener" target="_blank">
             <div className="work_logo"><img className="lazy" src="/assets/image/contact/freelancer.png" alt="Hire Best mobile app developers" width={200} height={75} /></div>
             <div className="work_rating">
               <img className="lazy" src="/assets/image/contact/rating-img.svg" alt="Top Mobile Application Developers UK" width={50} height={50} />
               <div className="rating_text">
                 <p>Rating<strong>4.5</strong></p>
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
               </div>
             </div>
           </a>
         </li>
       </ul>
     </div>
     <div className="col-12 col-sm-12 col-lg-7">
       <h3 className="d-flex d-lg-none mb-3">Hire us on</h3>
       <form method="post" id="schedule_a_call" className="row">
         <div id="error_message_schedule_a_call" className="alert alert-danger" style={{display: 'none'}} />
         <div id="success_message_schedule_a_call" className="alert alert-success" style={{display: 'none'}} />
         <div className="form-group col-sm-6 col-12">
           <label htmlFor="name">Name
             <input type="text" name="name" className="form-control" placeholder="Name" required  />
           </label>
         </div>
         <div className="form-group col-sm-6 col-12">
           <label htmlFor="email">Email
             <input type="email" name="email" className="form-control" placeholder="Email" required />
           </label>
         </div>
         <div className="form-group col-md-6 col-12">
           <div className="phone-field">
             <div className="con-num">
               <label htmlFor="phone">Contact No
                 <input type="text" name="phone" className="form-control contact-phone" placeholder="Contact No" required  minLength={10} maxLength={11}  />
               </label>
             </div>
           </div>
         </div>
         <div className="form-group col-sm-6 col-12">
           <label htmlFor="company_name">Company Name
             <input type="text" name="company_name" className="form-control" placeholder="Company Name" />
           </label>
         </div>
         <div className="form-group col-sm-6 col-12">
           <label htmlFor="budget">Budget
             <select className="form-control" name="budget">
               <option value>-- Your Budget --</option>
               <option value="£0 - £1000">£0 - £1000</option>
               <option value="£1000 - £5000">£1000 - £5000</option>
               <option value="£5000 - £10000">£5000 - £10000</option>
               <option value="£10000 - £20000">£10000 - £20000</option>
               <option value="£20000+">£20000 +</option>
             </select>
           </label>
         </div>
         <div className="form-group col-sm-6 col-12">
           {/* <label for="skype">Skype
      <input type="text" name="skype" class="form-control" placeholder="Skype Id">
      </label> */}
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
         <div className="form-group col-sm-6 col-12">
           <label htmlFor="service">Service
             <select className="form-control" name="service" required>
               <option value>-- Select the Service --</option>
               <option value="Mobile App Development">Mobile App Development</option>
               <option value="AR Development">AR Development</option>
               <option value="VR Development">VR Development</option>
               <option value="Web Development">Web Development</option>
               <option value="Game Development">Game Development</option>
               <option value="Enterprise Solutions">Enterprise Solutions</option>
               <option value="Startup MVP">Startup MVP</option>
               <option value="Other">Other</option>
             </select>
           </label>
         </div>
         <div className="form-group col-sm-6 col-12">
           <label htmlFor="reference">Reference
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
           </label>
         </div>
         <div className="form-group col-12">
           <label htmlFor="message">Message
             <textarea name="message" className="form-control" placeholder="Message" rows={10} defaultValue={""} />
           </label>
         </div>
         <div className="form-group col-sm-6 col-12">
           <div id="intelGrecaptchaScheduleCall" />
           <input type="hidden" className="form-control" name="recaptcha_schedule_call" id="recaptcha_schedule_call" />
         </div>
         <div className="form-group col-sm-6 col-12 text-right">
           <button type="submit" className="btn-custome btn waves-effect waves-light contact-custome-btn"><i className="fa fa-spinner fa-spin start-loader" />Send Message</button>
         </div>
       </form>
     </div>
   </div>
 </div>
</section></div>
  )
}

export default ContactUs