import React, { useState } from "react";
import service from "./service.json";
import {
  FinanceSvg,
  HealthSvg,
  MediaSvg,
  RealEstateSvg,
  ShoppingSvg,
  TravelSvg,
} from "../svgIcons/svg";
import Slider from "react-slick";
const Industries = () => {
  const [toggle, setToggle] = useState(0);
  const toggleTab = (index) => {
    if (index >= service.length) {
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
    slidesToScroll: 1,
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
  function createMarkup(c) {
    return {__html: c};
  }
  return (
    <div>
      <section className="padding-00-60 bg-light o-hidden">
        <div className="app-service-tab-content">
          <div>
            <div className="container">
              <div className="title">
                <span>Industries We Serve</span>
                <h2>Bespoke Solutions For Every Industry</h2>
                <p>
                  Every industry, every business is as unique as a fingerprint.
                  Bulk produced or cookie cut software does not further the
                  business objectives. What your business needs is focused and
                  bespoke digital solutions for diverse use cases. Pride
                  can help with that.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 col-12 order-lg-1">
                  <img
                    className="lazy"
                    style={{ borderRadius: "20px" }}
                    src={service[toggle].img}
                    alt="custom android app development company London"
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <div className="app-service-tab-text">
                    <h3>{service[toggle].name}</h3>
                    <p dangerouslySetInnerHTML={createMarkup(service[toggle].discription)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 app-service-tab mt-4">
          <Slider {...settings}>
            <div
              className={`${
                toggle === 0 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(0)}
            >
              <div className="app-service-tab-box">
                <RealEstateSvg />
                <span>Logistics Industry</span>
              </div>
            </div>
            <div
              className={`${
                toggle === 1 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(1)}
            >
              <div className="app-service-tab-box">
                <ShoppingSvg />
                <span>Hospitality Industry</span>
              </div>
            </div>
            <div
              className={`${
                toggle === 2 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(2)}
            >
              <div className="app-service-tab-box">
                <FinanceSvg />
                <span>Travel & Tourism Industry</span>
              </div>
            </div>
            <div
              className={`${
                toggle === 3 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(3)}
            >
              <div
                className={"app-service-tab-box "}
                aria-hidden={setToggle === 3 ? "true" : "false"}
              >
                <HealthSvg />
                <span>Real Estate Industry</span>
              </div>
            </div>
            <div
              className={`${
                toggle === 4 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(4)}
            >
              <div className="app-service-tab-box">
                <TravelSvg />
                <span>Healthcare Industry</span>
              </div>
            </div>
            <div
              className={`${
                toggle === 5 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(5)}
            >
              <div className="app-service-tab-box">
                <MediaSvg />
                <span>eCommerce Industry</span>
              </div>
            </div>
            <div
              className={`${
                toggle === 6 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(6)}
            >
              <div className="app-service-tab-box">
                <MediaSvg />
                <span>Education Industry</span>
              </div>
            </div>
            <div
              className={`${
                toggle === 7 ? "slick-active slick-current" : "item"
              }`}
              onClick={() => toggleTab(7)}
            >
              <div className="app-service-tab-box">
                <MediaSvg />
                <span>Media and Entertainment Industry</span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Industries;
