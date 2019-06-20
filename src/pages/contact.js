import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1>Talk to Me</h1>
    {/* <p>Feel free to talk about anything you want...</p> */}
    <div className="contact-section">
      <form
        className="contact-form" 
        name="contact"
        method="post" 
        data-netlify="true"
        data-netlify-honeypot="bot-field">
      
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="text" name="email" id="email" placeholder="Email"/>
        <input type="text" name="subject" id="subject" placeholder="Subject" />
        <textarea name="message" id="message" placeholder="Write your message..."/>
        <input type="submit" value="Send Message" className="send-button"/>            
      </form>
    </div>
  </Layout>
)

export default Contact