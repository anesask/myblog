import React from 'react'
import Layout from '../components/layout'
import Fronttext from '../images/frontpage_text.svg'
// import Menu from '../components/menu'

const IndexPage = () => (
    
    <div className="inner-wrapper">
      <Layout>  
        <div className="fronttext-img"><img src={Fronttext} alt="I'm Anes"/>
            <h1>Human being & Web Developer</h1>
        </div>
      </Layout>
    </div>
  

)

export default IndexPage
