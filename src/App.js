import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import Navbar from './common/navbar/Navbar';
import Footer from './common/footer/Footer';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import WebDevelopment from './components/webDevelopment/WebDevelopment';
import DigitalMarketing from './components/DigitalMarketing.jsx/DigitalMarketing';
import UiUxDesigning from './components/ui_ux_designing/UiUxDesigning';
import Contact from './components/contact/Contact';
import MobileApp from './components/MobileAppDevelopment/MobileApp';

function App() {
  const WindowScrollTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        /* settimeout make sure this run after components have rendered. This will help fixing bug for some views where scroll to top not working perfectly */
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    }, [pathname])
    return null
}

  return (

    
    <>
      <BrowserRouter>
      <WindowScrollTop/>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about_us' element={<AboutUs/>}/>
        <Route exact path='/app_development' element={<MobileApp/>}/>
        <Route exact path='/web-development' element={<WebDevelopment/>}/>
        <Route exact path='/digital_marketing' element={<DigitalMarketing/>}/>
        <Route exact path='/ui-ux_designing' element={<UiUxDesigning/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
