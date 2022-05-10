import React from 'react'
import ContactUs from '../../common/contact/ContactUs'
import Leadership from './Leadership'
import MeetTeam from './MeetTeam'

const AboutUs = () => {
    return (
        <div>   <section className="banner innerbanner aboutusbanner">
            <div className="video">
                <img className="lazy" src="assets/image/about/about_Us.jpg" alt="Pride careers" width={1920} height={800} />
            </div>
            <div className="tenc-intro-main__wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h1><span>We are Pride</span> We Deliver the Code, Your Project Delivers the Change</h1>
                            <p style={{ margin: '0 0 10px' }}>The Mobile App Developers Located in the Heart of the Yorkshire Capital (Leeds ofcourse...) Our passion is to deliver tech disrupting solutions for our Clients, so their Business can change the world we live in for the better.</p>
                            <p style={{ margin: 0 }}>We are always looking for the latest innovation and want to work with Client’s who are as passionate as we are to deliver change. Having been founded in 2015, starting as a group of freelancers, becoming a market leader in mobile tech solutions globally, we’re excited to have new and exciting business’ join us for our next Chapter.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/"> Home</a> </li>
                <li className="breadcrumb-item active">About Us</li>
            </ol>
        </section>
        <MeetTeam/>
        <Leadership/>
        <ContactUs/>
        </div>
    )
}

export default AboutUs