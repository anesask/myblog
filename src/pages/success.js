import React from 'react'
import { Link } from 'gatsby'
import MailIcon from '../images/mail.svg'
import Layout from '../components/layout'

const Success = () => (
    <Layout>
      

        <div className="mail-icon">            
            <img src={MailIcon} alt="Mail Icon" />
            <h2>Thank you for contacting me!</h2>
            <Link className="goback" to="/">&#8592; Go back</Link>
        </div>
      
    </Layout>
  )
  
  export default Success
  