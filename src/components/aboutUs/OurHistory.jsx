import React,{useState} from 'react'
import Slider from "react-slick";
import  history  from './history.json';
const OurHistory = () => {
    const [toggle, setToggle] = useState(0);
    const toggleTab = (index) => {
      if (index >= history.length) {
        setToggle(0);
      } else {
        setToggle(index);
      }
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        afterChange: toggleTab,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div>{/*====== Our History Progress Section ======*/}
    <section className="padding-6030 our-history-progress-section bg-light">
      <div className="container">
        <div className="title">
          <span>Our history</span>
          <h2>Tell tales about how we started and how we grew</h2>
          <p>Since its inception, Pride as web and mobile app development company has come a long way. Our Journey has been incredible and we thrive to provide seamless digital transformation solutions for startups and enterprise.</p>
        </div>
        <div className="our-history-progress-top">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-center">
              <div className="our-history-detail-image">
                <img src="/assets/image/about/about.jpg" alt="intelivita" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="our-history-content-wrap box-shadow rounded10">
                <div className="our-history-content-slider">
                  <div>
                    <div className="our-history-detail-box">
                      <div className="our-history-detail-box-title-wrap">
                        <div className="our-history-detail-num">{history[toggle].year}</div>
                        <div className="our-history-detail-title">{history[toggle].title}</div>
                      </div>
                     
                      <p>{history[toggle].discription}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-history-progress-bottom">
        <div className="container">
          <div className="our-history-year-slider">
          <Slider {...settings}>
          <div
              className={`${
                toggle === 0 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(0)}
            >
              <div className="our-history-year-box">2016</div>
            </div>
           <div
              className={`${
                toggle === 1 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(1)}
            >
              <div className="our-history-year-box">2017</div>
            </div>
            <div
              className={`${
                toggle === 2 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(2)}
            >
              <div className="our-history-year-box">2018</div>
            </div>
            <div
              className={`${
                toggle === 3 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(3)}
            >
              <div className="our-history-year-box">2019</div>
            </div>
            <div
              className={`${
                toggle === 4 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(4)}
            >
              <div className="our-history-year-box">2020</div>
            </div>
            <div
              className={`${
                toggle === 5 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(5)}
            >
              <div className="our-history-year-box">2021</div>
            </div>
            <div
              className={`${
                toggle === 6 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(6)}
            >
              <div className="our-history-year-box">2022</div>
            </div>
           
            </Slider>
          </div>
        </div>
      </div>
    </section>
    {/*====== End Our History Progress Section ======*/}
    </div>
  )
}

export default OurHistory