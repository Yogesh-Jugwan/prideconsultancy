import React from 'react'
import { AndroidSvg, CrossPlatformSvg, FlutterSvg } from '../svgIcons/svg'

const WeOffers = () => {
    return (
        <div><section className="padding-60 bg-light game-service-offer-main">
            <div className="container">
                <div className="title">
                    <span>What We Offers</span>
                    <h2>Mobile App Development Services We Offer</h2>
                    <p>Our mobile app development span across all mobile platforms offering functional solutions as we develop scalable and robust mobile applications for our clients.</p>
                </div>
                <div className="row justify-content-between m-height-450">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                        <div className="game-service-offer-box rounded10 mhbox">
                            <div className="game-service-offer-icon box-shadow">
                               <AndroidSvg/>
                            </div>
                            <h3><a href="/android-application-development">Android App Development</a></h3>
                            <p>The number of android users is increasing day by day and so is the need for Android apps. Our team of highly passionate professionals are committed to deliver the finest quality of Android apps for smartphones and tablet. We channel your ideas into a digitized custom Android app that your end users will enjoy using. Get your app developed today to help take your business to the next level or bring your ideas to life.</p>
                            <a className="btn-custome btn waves-effect waves-light" href="/android-application-development">Explore More</a>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                        <div className="game-service-offer-box rounded10 mhbox">
                            <div className="game-service-offer-icon box-shadow">
                               <CrossPlatformSvg/>
                            </div>
                            <h3><a href="/cross-platform-mobile-app-development">Cross Plateform App Development</a></h3>
                            <p>We create mobile applications that run on any device and operating system as and when your business needs. Cross platform apps helps you yield better results by enabling you to reach a wider audience. We provide hybrid app frameworks, which combine native apps and web based applications that ensures platform specific functionality, giving you the look and feel of a native mobile app.</p>
                            <a className="btn-custome btn waves-effect waves-light" href="/cross-platform-mobile-app-development">Explore More</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                        <div className="game-service-offer-box rounded10 mhbox">
                            <div className="game-service-offer-icon box-shadow">
                                <FlutterSvg/>
                            </div>
                            <h3><a href="/flutter-application-development">Flutter App Development</a></h3>
                            <p>At Pride, we adhere to innovation and adapting to the latest changes in the mobile app development technology. Google flutter SDK is the new addition to the app development framework. It gives compatibility and flexibility to developers in building native-like mobile applications for both Android and iOS devices with excellent user experience and material design.</p>
                            <a className="btn-custome btn waves-effect waves-light" href="flutter-application-development">Explore More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default WeOffers