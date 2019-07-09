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
            hideOnAccept
            disableStyles={true}
            containerClasses="cookie-container"
            contentClasses="cookie-content"              
            buttonClasses="cookie-button-accept"
            declineButtonClasses="cookie-button-decline"
            >
        
          This website uses cookies to enhance the user experience. If you decline, your information won’t be tracked when you visit this website.
          To find out more about the cookies are used, see <a href="/privacypolicy">Privacy Policy</a> and <a href="/termsofservice">Terms Of Service</a>.
      </CookieConsent>      
    </div>
  

)

export default IndexPage
