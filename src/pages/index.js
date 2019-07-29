import React, { useState, useEffect } from 'react';
import Layout from '../components/layout'
import Fronttext from '../images/frontpage_text.svg'
import CookieConsent from 'react-cookie-consent';
// import gaOptout from '../../site-config';
import Menu from '../components/menu'
// Assets
import desktopImage from '../../static/background-desktop.jpg';
import mobileImage from '../../static/background-mobile.jpg';


const IndexPage = () => {
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;
    return(

    <div className="inner-wrapper">
      <Menu/>
        <div className="bgimage" style={{backgroundImage: `url(${imageUrl})` }}>
              <div className="fronttext-img"><img src={Fronttext} alt="I'm Anes"/>
                  <h1>Human being & Web Developer</h1>
              </div>
          </div>

      <CookieConsent 
        enableDeclineButton
        onDecline={() => <a href="javascript:gaOptout()">Decline</a>}
  	    hideOnAccept
        style={{ 
          background: "#282829",
          opacity: '.86',
          height: 'auto',
          fontSize: "12px"
        }}

      debug={true}
      >
        
          This website uses cookies to enhance the user experience. If you decline, your information won’t be tracked when you visit this website.
          To find out more about the cookies are used, see Privacy Policy.
      </CookieConsent>
    </div>   
  )  
}

// Background Image Responsive Hook
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};

export default IndexPage
