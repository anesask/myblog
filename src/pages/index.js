import React from 'react'
import Layout from '../components/layout'
import Fronttext from '../images/frontpage_text.svg'
import CookieConsent from 'react-cookie-consent';
// import gaOptout from '../../site-config';

const IndexPage = () => (
    
    <div className="inner-wrapper">
      <Layout>  
        <div className="fronttext-img"><img src={Fronttext} alt="I'm Anes"/>
            <h1>Human being & Web Developer</h1>
        </div>
      </Layout>
      <CookieConsent 
        enableDeclineButton
        onDecline={() => <a href="javascript:gaOptout()">Decline</a>}

        style={{ 
          background: "#282829",
          height: '7%',
          fontSize: "14px"
        }}

      // debug={true}
      >
        
          This website uses cookies to enhance the user experience. If you decline, your information won’t be tracked when you visit this website.
          To find out more about the cookies are used, see Privacy Policy.
      </CookieConsent>
    </div>
  

)

export default IndexPage
