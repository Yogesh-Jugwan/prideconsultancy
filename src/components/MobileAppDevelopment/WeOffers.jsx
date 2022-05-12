import React,{useState} from "react";
import Services from "./services.json";
const WeOffers = () => {
  const [service, setservice] = useState(0)
  return (
    <div>
      <section className="padding-60 about-leadership-section bg-white">
        <div >
          {Services.map((data, i) => {
            // console.log(data.length)
            return (
              <div className="container" key={i}>
                <div className="row align-items-center">
                  <div className={`ol-lg-5 col-md-5 col-sm-12 col-12 ${console.log(Services.length%2===0)?"order-md-1":""}`}>
                    <div className="about-leadership-image text-center">
                      <img
                        className="lazy"
                        src={data.svg}
                        alt=""
                      />
                      <div className="socialUser">
                  <a href="/about-us" target="_blank">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="/about-us" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="about-leadership-content-wrap">
                      <div className="about-leadership-content">
                        <div className="about-leadership-title">
                          {data.title}
                        </div>
                        <p>
                         {data.discription}
                        </p>
                        <p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default WeOffers;
