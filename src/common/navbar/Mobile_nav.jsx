import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Mobile_Nav = () => {
    const [isMenuVisible, setMenuVisible] = useState(false)
    const handleMenu = () => {
        setMenuVisible(!isMenuVisible);
    }
    const [subMenuVisible1,setsubMenuVisible1] = useState(false)
    const [subMenuVisible2,setsubMenuVisible2] = useState(false)
    return (
        <div>
            <div className="mobile_menu">
            <Link className={`cd-nav-trigger ${isMenuVisible && "nav-is-visible"}`} aria-label="Menu" onClick={handleMenu} to={(e) => e.preventDefault()}><span /></Link>
            <nav className="cd-nav">
                <ul id="cd-primary-nav" className={`cd-primary-nav is-fixed ${isMenuVisible && "nav-is-visible"}`} style={{ color: "white" }} >
                    <li><Link to="/" onClick={handleMenu}><i className="fas fa-home" /> Home</Link></li>
                    <li><Link to="/about_us" onClick={handleMenu}><i className="far fa-building" />About Us</Link></li>
                    {/* <li className={"has-children"} >
                        <Link to={(e) => e.preventDefault()} onClick={()=>{setsubMenuVisible(!subMenuVisible)}}><i className="far fa-building" />Company</Link>
                        <ul className={`cd-secondary-nav ${subMenuVisible ? "":"is-hidden"}`}>
                            <li className="go-back" onClick={()=>{setsubMenuVisible(!subMenuVisible)}}><Link to={(e) => e.preventDefault()}>Menu</Link></li>
                            <li><Link to="/about-us">Who We are</Link></li>
                            <li><Link to="/process">How we Work</Link></li>
                        </ul>
                    </li> */}
                    <li className="has-children">
                        <Link to={(e) => e.preventDefault()} onClick={()=>{setsubMenuVisible1(!subMenuVisible1)}} ><i className="fas fa-cogs" />Our Service</Link>
                        <ul className={`cd-secondary-nav ${subMenuVisible1 ? "":"is-hidden"}`}>
                            <li className="go-back" onClick={()=>{setsubMenuVisible1(!subMenuVisible1)}}><Link to={(e) => e.preventDefault()}>Menu</Link></li>
                            <li><Link to="/app_development" onClick={handleMenu}>Mobile App Development</Link></li>
                            <li><Link to="/web-development" onClick={handleMenu}>Web Development</Link></li>
                            <li><Link to="/digital_marketing" onClick={handleMenu}>Digital Marketing</Link></li>
                            <li><Link to="/ui-ux_esigning" onClick={handleMenu}>UI/UX & Designing</Link></li>
                        </ul>
                    </li>
                    <li className="has-children">
                        <Link to={(e) => e.preventDefault()} onClick={()=>{setsubMenuVisible2(!subMenuVisible2)}}>
                            <div className="icon">
                                <svg x="0px" y="0px" viewBox="0 0 100 100" style={{ enableBackground: 'new 0 0 100 100', color: "white" }} xmlSpace="preserve">
                                <g>
                                    <g>
                                        <path className="st0" d="M64.1,52.6h26.6c0.9,0,1.6-0.7,1.6-1.6v-31v-7.8c0-0.9-0.7-1.6-1.6-1.6H64.1c-0.9,0-1.6,0.7-1.6,1.6v7.8v31
             C62.5,52,63.2,52.6,64.1,52.6z M65.6,13.9h23.4v4.7H65.6V13.9z M65.6,21.6h23.4v27.9H65.6V21.6z M68.8,27.8h3.1v-3.1h-3.1V27.8z
             M75,27.8h10.9v-3.1H75V27.8z M68.8,34h3.1v-3.1h-3.1V34z M75,34h10.9v-3.1H75V34z M68.8,40.2h3.1v-3.1h-3.1V40.2z M75,40.2h10.9
             v-3.1H75V40.2z M68.8,46.4h3.1v-3.1h-3.1V46.4z M75,46.4h10.9v-3.1H75V46.4z M9.4,52.6h6.3c0.9,0,1.6-0.7,1.6-1.6v-1.6h21.9v1.6
             c0,0.9,0.7,1.6,1.6,1.6h6.3c0.9,0,1.6-0.7,1.6-1.6v-6.2c0-0.9-0.7-1.6-1.6-1.6h-1.6v-4.7h12.5c0.9,0,1.6-0.7,1.6-1.6v-9.3
             c0-0.9-0.7-1.6-1.6-1.6H45.3v-6.2h1.6c0.9,0,1.6-0.7,1.6-1.6v-6.2c0-0.9-0.7-1.6-1.6-1.6h-6.3c-0.9,0-1.6,0.7-1.6,1.6v1.6H17.2
             v-1.6c0-0.9-0.7-1.6-1.6-1.6H9.4c-0.9,0-1.6,0.7-1.6,1.6v6.2c0,0.9,0.7,1.6,1.6,1.6h1.6v23.3H9.4c-0.9,0-1.6,0.7-1.6,1.6v6.2
             C7.8,52,8.5,52.6,9.4,52.6z M45.3,49.5h-3.1v-3.1h3.1V49.5z M48.4,32.5v-3.1h3.1v1.6h3.1v-1.6h1.6v6.2H25v-6.2h1.6v1.6h3.1v-1.6
             h3.1v3.1h3.1v-3.1h3.1v1.6h3.1v-1.6h3.1v3.1H48.4z M42.2,13.9h3.1V17h-3.1V13.9z M17.2,18.5V17h21.9v1.6c0,0.9,0.7,1.6,1.6,1.6
             h1.6v6.2H23.4c-0.9,0-1.6,0.7-1.6,1.6v9.3c0,0.9,0.7,1.6,1.6,1.6h18.8v4.7h-1.6c-0.9,0-1.6,0.7-1.6,1.6v1.6H17.2v-1.6
             c0-0.9-0.7-1.6-1.6-1.6h-1.6V20.1h1.6C16.5,20.1,17.2,19.4,17.2,18.5z M10.9,13.9h3.1V17h-3.1V13.9z M10.9,46.4h3.1v3.1h-3.1V46.4
             z M96.9,4.5H3.1C1.4,4.5,0,5.9,0,7.6v49.7v10.9c0,1.7,1.4,3.1,3.1,3.1h37.2l-2.6,14h-4.9c-0.4,0-0.8,0.2-1.1,0.5l-3.1,3.1
             c-0.3,0.3-0.5,0.7-0.5,1.1V93c0,0.9,0.7,1.6,1.6,1.6h40.6c0.9,0,1.6-0.7,1.6-1.6v-3.1c0-0.4-0.2-0.8-0.5-1.1l-3.1-3.1
             c-0.3-0.3-0.7-0.5-1.1-0.5h-4.9l-2.6-14h37.2c1.7,0,3.1-1.4,3.1-3.1V57.3V7.6C100,5.9,98.6,4.5,96.9,4.5z M60.9,88.3h5.6l2.2,2.2
             v0.9H31.3v-0.9l2.2-2.2h5.6H60.9z M53.1,80.6v-3.1h-1.6l0-6.2h4.9l2.6,14H40.9l2.6-14h4.9l0,6.2h-1.6v3.1H53.1z M96.9,68.2H57.8
             H42.2H3.1v-9.3h93.8V68.2z M96.9,55.8H3.1V7.6h93.8V55.8z M54.7,62h-9.4v3.1h9.4V62z" />
                                    </g>
                                </g>
                            </svg>
                            </div>Pride Jobs</Link>
                            <ul className={`cd-secondary-nav ${subMenuVisible2 ? "":"is-hidden"}`}>
                            <li className="go-back"  onClick={()=>{setsubMenuVisible2(!subMenuVisible2)}}><Link to={(e) => e.preventDefault()}>Menu</Link></li>
                            <li><Link to="/about-us" onClick={handleMenu}>Job Seekers</Link></li>
                            <li><Link to="/process" onClick={handleMenu}>Employers</Link></li>
                        </ul>
                    </li>
                    {/* <li><Link to="/portfolio"><i className="fas fa-briefcase" />Portfolio</Link></li> */}
         <li><Link to="/blog" onClick={handleMenu}><i className="far fa-newspaper" />Blog</Link></li>
                    <li><Link to="/contact" onClick={handleMenu}><i className="fas fa-phone-volume" />Contact</Link></li>
                    <li><Link className="estimate_btn" to="/app-development-cost-calculator">Estimate Your Project</Link></li>
                </ul>
            </nav>
        </div></div>
    )
}

export default Mobile_Nav