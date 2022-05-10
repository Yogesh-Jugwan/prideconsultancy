import React, { useState } from 'react'

const Frameworks = () => {
    const [isVisible,setIsVisible] = useState(1);
    const displayBlock=(index)=>{
        setIsVisible(index)
    }
  return (
    <div><section className="padding-60 bg-white web-app-sev-lang">
    <div className="container">
      <div className="title">
        <span>Frameworks</span>
        <h2>Our suite of web development frameworks</h2>
        <p>Pride has a large pool of developers who are capable of web development using several frameworks.</p>
      </div>
    </div>
    <div className="web-app-sev-lang-collapse">
      <div className="container-fluid">
        <div className="row tab_wrapper first_tab">
          <div className="col-12 bg-light pr-0 left-col">
            <ul className="tab_list">
              <li className={isVisible===1?"active":" "} rel="tab_1_1" onClick={()=>displayBlock(1)}>PHP Development</li>
              <li className={isVisible===2?"active":" "}  rel="tab_1_2" onClick={()=>displayBlock(2)} >WordPress Development</li>
              <li className={isVisible===3?"active":" "}  rel="tab_1_3" onClick={()=>displayBlock(3)} >NextJS Development</li>
              <li className={isVisible===4?"active":" "}  rel="tab_1_3" onClick={()=>displayBlock(4)} >ReactJS Development</li>
            </ul>
          </div>
          <div className="col-12 right-col d-flex align-items-center">
            <div className="content_wrapper">
              <div className={isVisible===1?"accordian_header tab_1_1 active":"accordian_header tab_1_1"}>PHP Development</div>

              <div className={isVisible===1?"tab_content first tab_1_1 active":"tab_content first tab_1_1"} style={isVisible===1?{display: 'block'}:{display: 'none'}}>
                <img src="/assets/image/framework/php.svg" alt="Php Website Development" />
                <p>Ever since it was launched in 1994, PHP has become the primary language for web development. Being an open-source and server-sided web development framework, it allows developers to create web applications that can run on any platform. If you want to create a new-age web application that does not cost much and is not difficult to maintain, then our PHP development would be of help to you.</p>
                <a href="/assets/image/framework/workpress.svg" className="btn btn-custome waves-effect waves-light">Explore More</a>
              </div>
              <div className={isVisible===2?"accordian_header tab_1_2 active":"accordian_header tab_1_1"}>WordPress Development</div>
              <div className={isVisible===2?"tab_content first tab_1_2 active":"tab_content first tab_1_1"} style={isVisible===2?{display: 'block'}:{display: 'none'}}>
                <img src="/assets/image/framework/wordpress.svg" alt="WordPress Development" />
                <p>More than 25% of the internet is built using WordPress. From single page websites for bloggers to corporate blogs with growing portfolio of websites and subsites, WordPress is a CMS system that can do everything. Our WordPress developers can help you build robust websites that boast of interactive features and high-end security.</p>
                <a href="wordpress-development" className="btn btn-custome waves-effect waves-light">Explore More</a>
              </div>
              <div className={isVisible===3?"accordian_header tab_1_3 active":"accordian_header tab_1_1"}>NextJS Development</div>
              <div className={isVisible===3?"tab_content first tab_1_3 active":"tab_content first tab_1_1"} style={isVisible===3?{display: 'block'}:{display: 'none'}}>
                <img src="/assets/image/framework/nextjs.svg" alt="Codeigniter Development" />
                <p>Our web developers adore codeigniter for two reasons - it is lightweight and it is simple. It makes the task of creating a web application ridiculously simple. If you have a web application development requirement that needs to be done with a race against the clock, our Codeigniter development expertise could help.</p>
                <a href="php-codeigniter-development" className="btn btn-custome waves-effect waves-light">Explore More</a>
              </div>
              <div className={isVisible===4?"accordian_header tab_1_3 active":"accordian_header tab_1_1"}>NextJS Development</div>
              <div className={isVisible===4?"tab_content first tab_1_3 active":"tab_content first tab_1_1"} style={isVisible===4?{display: 'block'}:{display: 'none'}}>
                <img src="/assets/image/framework/reactjs.svg" alt="Codeigniter Development" />
                <p>Our web developers adore codeigniter for two reasons - it is lightweight and it is simple. It makes the task of creating a web application ridiculously simple. If you have a web application development requirement that needs to be done with a race against the clock, our Codeigniter development expertise could help.</p>
                <a href="php-codeigniter-development" className="btn btn-custome waves-effect waves-light">Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Frameworks