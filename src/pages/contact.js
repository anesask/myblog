import React from 'react'
// import { Link } from 'gatsby'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube, IoLogoGithub } from "react-icons/io";

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1>Talk to Me</h1>
    <p>Feel free to talk about anything you want...</p>
    <div className="contact-section">
      <form
        className="contact-form" 
        name="contact"
        method="post" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
        >
        

        <input hidden name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="text" name="email" id="email" placeholder="Email"/>
        <input type="text" name="subject" id="subject" placeholder="Subject" />
        <textarea name="message" id="message" placeholder="Write your message..."/>
        <div data-netlify-recaptcha />
        <input type="submit" value="Send Message" className="send-button"/>            
      </form>

      <div className="social-wrapper">
        <a href="https://www.facebook.com/anes.mulalic" target="_blank" rel="noopener noreferrer" className="social-icon">
          <IoLogoFacebook/>
        </a>
        <a href="https://www.linkedin.com/in/anesmulalic/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <IoLogoLinkedin/>
        </a> 
        <a href="https://www.youtube.com/channel/UCjRZZb1xR4jtKmRljq4d3JQ/videos" target="_blank" rel="noopener noreferrer" className="social-icon">
          <IoLogoYoutube/>
        </a>
        <a href="https://github.com/anesask" target="_blank" rel="noopener noreferrer" className="social-icon">
          <IoLogoGithub/>
        </a>
        <a href="https://www.instagram.com/anes_mulalic/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
          <IoLogoInstagram/>
        </a>
        

      </div>
    </div>

    
  </Layout>
)

export default Contact