import React from 'react'
import Layout from '../components/layout'
import Fronttext from '../images/frontpage_text.svg'
import CookieConsent from 'react-cookie-consent'



const IndexPage = () => (
  <div className="inner-wrapper">
    <Layout>
      <div className="fronttext-img">
        <img src={Fronttext} alt="I'm Anes" />
        <h1>Human being & Web Developer</h1>
      </div>

      <CookieConsent
        enableDeclineButton
        onDecline={() => <a href="javascript:gaOptout()">Decline</a>}
        hideOnAccept
        style={{
          background: '#282829',
          opacity: '.86',
          height: 'auto',
          fontSize: '12px',
        }}

        // debug={true}
      >
        This website uses cookies to enhance the user experience. If you
        decline, your information won’t be tracked when you visit this website.
        To find out more about the cookies are used, see Privacy Policy.
      </CookieConsent>
    </Layout>
  </div>
)

export default IndexPage
